import { Usuario } from '../models/usuario';
import DatabaseService from '../database/DatabaseService';

export class UsuarioController {
  constructor() {
    this.listeners = [];
  }

  // Inicializar el controlador con el Service
  async initialize() {
    await DatabaseService.initialize();
  }

  // Consultar usuarios
  async obtenerUsuarios() {
    try {
      const data = await DatabaseService.getAll();
      return data.map(u => new Usuario(u.id, u.nombre, u.fecha_creacion));
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      throw new Error('No se pudieron cargar los usuarios');
    }
  }

  async crearUsuario(nombre) {
    try {
      Usuario.validar(nombre);

      const nuevoUsuario = await DatabaseService.add(nombre.trim());

      this.notifyListeners();

      return new Usuario(
        nuevoUsuario.id,
        nuevoUsuario.nombre,
        nuevoUsuario.fecha_creacion
      );
    } catch (error) {
      console.error('Error al crear usuario:', error);
      throw error;
    }
  }

  async actualizarUsuario(id, nombre) {
  try {
    Usuario.validar(nombre);
    const actualizado = await DatabaseService.update(id, nombre.trim());
    this.notifyListeners();
    return actualizado;
  } catch (err) {
    console.error(err);
    throw new Error('No se pudo actualizar el usuario');
  }
}

async eliminarUsuario(id) {
  try {
    await DatabaseService.delete(id);
    this.notifyListeners();
    return true;
  } catch (err) {
    console.error(err);
    throw new Error('Error al eliminar usuario');
  }
}


  // Sistema de observadores para actualizar la vista automáticamente
  addListener(callback) {
    this.listeners.push(callback);
  }

  removeListener(callback) {
    this.listeners = this.listeners.filter(l => l !== callback);
  }

  notifyListeners() {
    this.listeners.forEach(callback => callback());
  }
}