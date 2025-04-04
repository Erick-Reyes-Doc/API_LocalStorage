# 🔁 API + LocalStorage (React)

Este proyecto es una demostración de cómo consumir datos desde una **API externa** y almacenarlos localmente en el **LocalStorage del navegador** usando **React**.

Ideal como base para aplicaciones que necesitan:

- Mostrar datos de una API
- Guardar un estado persistente incluso si el usuario recarga
- Ofrecer una experiencia offline básica

---

## ⚙️ Tecnologías utilizadas

- ⚛️ **React** (con `useEffect`, `useState`)
- 🌐 **Axios** o `fetch` para consumo de API
- 💾 **LocalStorage** para persistencia de datos
- 🎨 HTML/CSS/Tailwind (opcional según tu estilo)

---

## 🧠 ¿Qué hace la app?

- Realiza una **petición a una API externa** al iniciar.
- Guarda la respuesta **en LocalStorage** para uso posterior.
- Al volver a entrar, muestra los datos sin necesidad de volver a llamar a la API (a menos que lo desees).
- Incluye funciones para limpiar, actualizar o re-consultar los datos.
