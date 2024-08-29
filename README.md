# Ejecución de Programas

Este repositorio contiene varios programas en JavaScript. A continuación, se detalla cómo ejecutar cada uno de ellos.

## Instrucciones para ejecutar

1. Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu sistema.
2. Abre una terminal o línea de comandos.
3. Navega al directorio raíz del proyecto.

# API de Tareas

Esta API permite gestionar tareas mediante operaciones de creación, lectura, actualización, eliminación y consulta de estadísticas. A continuación, se describen las rutas disponibles y cómo utilizarlas con Postman.

## Requisitos Previos

- Tener Node.js y npm instalados.
- Tener el servidor corriendo. Puedes iniciar el servidor con:
  
    ```bash
    npm start
    ```

Asegúrate de que el servidor esté corriendo en [http://localhost:3000](http://localhost:3000) o el puerto configurado.

## Rutas Disponibles

### 1. Crear una Tarea

**Método:** POST

**URL:** [http://localhost:3000/tasks](http://localhost:3000/tasks)

**Descripción:** Crea una nueva tarea.

**Cuerpo de la Solicitud (JSON):**

```json
    {
        "titulo": "Estudiar Node.js",
        "descripcion": "Completar el curso de Node.js en línea."
    }
```

**Respuesta Exitosa:**

- **Código:** 201 Created
- **Cuerpo:** Objeto de la tarea creada.

**Errores:**

- **Código:** 400 Bad Request, si falta el título.

### 2. Obtener Todas las Tareas

**Método:** GET
**URL:** <http://localhost:3000/tasks>
**Descripción:** Devuelve una lista de todas las tareas.

**Respuesta Exitosa:**

- **Código:** 200 OK
- **Cuerpo:** Array de tareas.

### 3. Obtener una Tarea por ID

**Método:** GET

**URL:** <http://localhost:3000/tasks/:id>

**Descripción:** Devuelve una tarea específica por su ID.

**Parámetros de Ruta:**

- **id (Número):** ID de la tarea.

**Respuesta Exitosa:**

- **Código:** 200 OK
- **Cuerpo:** Objeto de la tarea.
  
**Errores:**

- **Código:** 404 Not Found, si la tarea no existe.
  
### 4. Editar una Tarea

**Método:** PUT

**URL:** <http://localhost:3000/tasks/:id>

**Descripción:** Actualiza una tarea existente.

**Parámetros de Ruta:**

- **id (Número):** ID de la tarea.
- **Cuerpo de la Solicitud (JSON):**
  
    ```json
    {
        "titulo": "Estudiar Node.js y Express",
        "descripcion": "Completar el curso de Express."
    }
    ```

**Respuesta Exitosa:**

- **Código:** 200 OK
- **Cuerpo:** Objeto de la tarea actualizada.

**Errores:**

- **Código:** 404 Not Found, si la tarea no existe.

### 5. Eliminar una Tarea

**Método:** DELETE

**URL:** <http://localhost:3000/tasks/:id>

**Descripción:** Elimina una tarea por su ID.

**Parámetros de Ruta:**

- **id (Número):** ID de la tarea.

**Respuesta Exitosa:**

- **Código:** 200 OK
- **Cuerpo:** Objeto de la tarea eliminada.

**Errores:**
**Código:** 404 Not Found, si la tarea no existe.

### 6. Obtener Estadísticas de Tareas

**Método:** GET

**URL:** <http://localhost:3000/tasks/stats>

**Descripción:** Devuelve estadísticas sobre las tareas.

**Respuesta Exitosa:**

- **Código:** 200 OK

- **Cuerpo:** Objeto con estadísticas, incluyendo el total de tareas, tareas completadas, tareas pendientes, tarea más reciente y tarea más antigua.
