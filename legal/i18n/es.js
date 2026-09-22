/**
 * Spanish legal copy — translated from the English originals in legal/*.js.
 * The English version is binding; see `notice`.
 */
module.exports = {
  notice: "Esta página es una traducción ofrecida para tu comodidad; si difiere de la versión en inglés, prevalece la versión en inglés.",

  privacy: {
    meta: {
      title: "Vakit — Política de privacidad",
      description: "Política de privacidad de Vakit. No requiere cuenta ni recoge coordenadas GPS; los registros de jatm y los marcadores se sincronizan solo a través de tu propio Apple iCloud.",
    },
    title: "Política de <em>privacidad</em>",
    desc: "Última actualización: 10 de septiembre de 2026 — Versión 1.7.4\n\nVakit respeta tu privacidad. No hace falta crear una cuenta y no recogemos información que te identifique personalmente (nombre, correo electrónico, teléfono, fotos, contactos). Los horarios de oración, la dirección de la alquibla y los recordatorios se calculan por completo en tu dispositivo. Tu progreso de jatm, tus marcadores, metas y mezquitas favoritas permanecen en tu dispositivo y solo se sincronizan dentro de tu propia cuenta de Apple iCloud: nunca se envían a nuestros servidores. Tu lista de dhikr es la excepción: se envía a nuestros servidores junto con las estadísticas de uso para que podamos mejorar la app (consulta la sección 1). Todo lo que se envía a nuestros servidores está vinculado a un código de usuario permanente que no contiene datos identificativos.",
    sections: [
      {
        t: "1. Datos que recogemos",
        b: "Datos que NO recogemos:\n• Nombre, correo electrónico, teléfono, fotos, micrófono, cámara, contactos\n• Coordenadas GPS (latitud/longitud) – nunca se envían a nuestros servidores\n• Credenciales de cuenta (Vakit no tiene sistema de cuentas)\n\nDatos guardados en tu dispositivo y sincronizados dentro de tu espacio privado de iCloud:\n• Registros de dhikr, progreso del jatm, metas de adoración\n• Marcadores del Corán y de hadices, historial de lectura\n• Contadores de suras completadas, estado de las secciones de hadices\n• Tus registros de oraciones perdidas y de ayunos pendientes\n• Tus marcas de días de exención\n• Mezquitas favoritas\n• Preferencias de la app (idioma, método de cálculo, ajustes de notificaciones, tema)\n\nDatos que se envían a nuestros servidores, vinculados a un código de usuario permanente que no contiene datos identificativos (un seudónimo; no son datos anónimos):\n• Ubicación regional (país, ciudad, distrito) – NO coordenadas GPS\n• Modelo del dispositivo, versión de iOS/macOS, versión de la app, versión de watchOS\n• Preferencias de la app (idioma, método de cálculo, tema, escuela jurídica, tipo de calendario, el género que elegiste para la guía de la oración, las oraciones de las que quieres recibir notificaciones y tus preferencias de lectura del Corán y los hadices: tamaño de letra, traducción, recitador, grafía). Tu posición de lectura y tu historial NO se incluyen.\n• Estadísticas de uso de funciones (pantallas vistas, uso de funciones). Muestran que se usó una sección; por ejemplo, que se marcó un día de exención o que se registró una oración perdida. El registro en sí (la lista de tus anotaciones) no se envía. Lo que se envía es el hecho de que la acción ocurrió, junto con algunas cifras; por ejemplo, la oración que marcaste, tus recuentos diarios de adoración, lo que te queda por recuperar (qada) o el número de una aleya o de un hadiz que guardaste; como toda estadística, lleva una marca de tiempo.\n• El texto de las búsquedas que haces en la app (búsqueda en el Corán, hadices, dhikr, nombres de Alá, mezquitas y ajustes) – se recoge para ver con qué palabras no encuentras lo que buscas y corregir la búsqueda; se guardan como máximo 80 caracteres.\n• Tu lista de dhikr – nombre, tipo, categoría y contadores de cada dhikr, incluidos el texto árabe, la descripción y la fuente que introduces en los dhikr que añades tú. Se recoge para ver qué dhikr se usan y con qué frecuencia, y así mejorar la sección de dhikr.\n• Informes de fallos (a través de Firebase Crashlytics; no contienen datos personales)\n\nComo este código de usuario se sincroniza a través del llavero de iCloud, los dispositivos con el mismo ID de Apple cuentan como un solo usuario y el código se conserva aunque elimines y reinstales la app. El código no contiene datos de identidad; tus datos nunca se venden ni se usan con fines publicitarios.",
      },
      {
        t: "2. Cómo usamos tus datos",
        b: "• Cálculo de horarios de oración – La ubicación se procesa localmente en tu dispositivo y el cálculo se hace sin conexión con la biblioteca Adhan.\n• Dirección de la alquibla – La ubicación y el rumbo de la brújula se combinan en el dispositivo.\n• Nombre del lugar – Para mostrar el nombre del lugar donde estás, tus coordenadas se envían al servicio de nombres de lugares de Apple; no a los servidores de Vakit.\n• Recordatorios de adoración – iOS y macOS programan las notificaciones locales en el dispositivo.\n• Avisos – Los avisos de días benditos y de nuevas versiones se difunden mediante Firebase Cloud Messaging; no hay segmentación individual.\n• Sermón del viernes – El sermón de la semana se descarga de la página pública del Diyanet; la petición no lleva datos identificativos.\n• Mezquitas cercanas – Tu ubicación se envía a Apple MapKit (búsqueda de mezquitas, distancia, indicaciones); no a los servidores de Vakit.\n• Datos de usuario (dhikr, jatm, marcadores) – Se guardan localmente con Core Data y se sincronizan dentro de tu espacio privado de Apple iCloud. De ellos, solo la lista de dhikr se envía además al servidor de Vakit (consulta la sección 1).\n• Desarrollo y mejora – Las estadísticas de uso (sin coordenadas GPS) se usan para supervisar el rendimiento y detectar errores.",
      },
      {
        t: "3. Sincronización con iCloud (CloudKit)",
        b: "Vakit sincroniza tus registros de adoración (dhikr, jatm, marcadores, metas, mezquitas favoritas) entre tus dispositivos mediante CloudKit de Apple. Estos datos:\n• Residen solo en la base de datos privada de tu propio ID de Apple.\n• Están cifrados en la infraestructura de Apple; ni nosotros, ni el personal de Apple, ni terceros pueden acceder a ellos.\n• Se sincronizan automáticamente entre iPhone, iPad, Mac y Apple Watch.\n• Permanecen solo en tu dispositivo si desactivas iCloud.\n• Se eliminan de todos tus dispositivos cuando usas «Eliminar la cuenta» o borras los datos de Vakit de iCloud.\n\nMás información: apple.com/legal/privacy",
      },
      {
        t: "4. Datos del Apple Watch y del Mac",
        b: "Vakit incluye una app complementaria para watchOS 9+. En el reloj:\n• El permiso de ubicación se concede por separado en el reloj; si Vakit está instalada en el iPhone, la ubicación llega mediante WatchConnectivity; si no, se usa el GPS del reloj.\n• El sensor de la brújula se procesa en el dispositivo para la alquibla; nunca se envía a un servidor.\n• No leemos datos de salud (HealthKit), actividad ni frecuencia cardiaca.\n• Las notificaciones se replican desde el iPhone mediante la duplicación de notificaciones de iOS; si el reloj funciona solo, programa sus propias notificaciones locales.\n\nEn el Mac (macOS 13+):\n• La app para Mac es la misma que la del iPhone; tus datos también se guardan en el dispositivo y se sincronizan dentro de tu propio espacio privado de iCloud.\n• Los Mac no tienen brújula, por lo que no hay brújula de la alquibla en tiempo real; la dirección y la distancia se calculan a partir de tu ubicación y se muestran como texto.\n• En el Mac, la ubicación procede de los servicios de localización basados en Wi-Fi en lugar del GPS, y tampoco se envía nunca a nuestros servidores.\n• El permiso y los ajustes de notificaciones son independientes en cada dispositivo; cambiarlos en el Mac no afecta a tu iPhone.",
      },
      {
        t: "5. Servicios de terceros",
        b: "Vakit usa los siguientes servicios con fines limitados. Ninguno está vinculado a tu identidad personal:\n\n• Apple iCloud / CloudKit – Sincronización de datos de usuario (en tu espacio privado de iCloud).\n• Apple MapKit – Mezquitas cercanas, mapa e indicaciones (la ubicación se envía a Apple).\n• Firebase Crashlytics (Google) – Informes de fallos sin datos de identidad (traza de la pila, modelo del dispositivo, versión de iOS/macOS).\n• Firebase Remote Config (Google) – Indicadores de funciones y despliegue gradual (no lee datos del dispositivo).\n• Apple StoreKit 2 – Donaciones opcionales (compras dentro de la app). Apple procesa los datos de pago; Vakit nunca ve los datos de la tarjeta.\n• Firebase Cloud Messaging (Google) + Apple Push Notification (APNs) – Avisos de días benditos y de nuevas versiones. Los avisos se difunden por temas; no hay segmentación individual.\n• Diyanet (dinhizmetleri.diyanet.gov.tr) – Texto y audio del sermón del viernes.\n• Servidor de Vakit (Alemania, Fráncfort) – Estadísticas de uso y tu lista de dhikr, vinculadas a un código de usuario que no contiene datos identificativos. Tus registros de jatm, marcadores, metas y lectura nunca se envían allí.\n\nNota: NO se usa Firebase Analytics; no se recoge el identificador de publicidad (IDFA).\n\nPolítica de privacidad de Google: policies.google.com/privacy",
      },
      {
        t: "6. Publicidad",
        b: "Vakit no muestra publicidad. La única fuente de ingresos de la app son las donaciones voluntarias de los usuarios.",
      },
      {
        t: "7. Donaciones (compras dentro de la app)",
        b: "Vakit es gratuita. Para apoyar al desarrollador puedes hacer donaciones voluntarias, en niveles de 10 ₺ a 10.000 ₺, desde la pantalla «Mantener vivo Vakit». Estas transacciones:\n• Las procesa Apple StoreKit 2; los datos de pago (tarjeta, IBAN, Apple Pay) solo se envían a Apple.\n• Vakit nunca ve ni guarda tu método de pago ni tus datos financieros.\n• Los reembolsos solo pueden solicitarse a través de Apple (reportaproblem.apple.com).",
      },
      {
        t: "8. Conservación de los datos",
        b: "• Datos locales del dispositivo – Se conservan hasta que eliminas la app.\n• Datos de iCloud – Se conservan hasta que retiras Vakit de iCloud o desactivas tu ID de Apple.\n• Estadísticas de uso en el servidor – Se conservan 180 días (unos 6 meses) y después se eliminan automáticamente. Los textos de las búsquedas siguen el mismo plazo.\n• Informes de fallos (Crashlytics) – Se conservan 90 días y después se eliminan.\n• Registros del servidor – Se rotan en un plazo de 30 días.",
      },
      {
        t: "9. Tus derechos (KVKK / RGPD)",
        b: "Según la KVKK de Turquía y el RGPD de la UE tienes derecho a:\n• Saber qué datos se recogen sobre ti\n• Oponerte al tratamiento de datos (retira los permisos de ubicación, notificaciones o movimiento en Ajustes → Vakit en iOS, o en Ajustes del Sistema → Vakit en el Mac)\n• Solicitar la supresión de tus datos: Ajustes → Eliminar la cuenta borra todo lo que hay en tu dispositivo y en iCloud. Para que se borren las estadísticas de uso de nuestro servidor, escribe a hakancelikdev@gmail.com; tu solicitud se atiende en un plazo máximo de 30 días.\n• La portabilidad de los datos\n• Presentar una reclamación ante la autoridad de la KVKK\n\nEnvía tus solicitudes a hakancelikdev@gmail.com; respondemos en un plazo máximo de 30 días.",
      },
      {
        t: "10. Privacidad de los menores",
        b: "Vakit se ofrece en el App Store con una clasificación de 4+, pero no recogemos conscientemente datos personales de usuarios menores de 13 años. Si crees que un menor de 13 años ha facilitado datos, escribe a hakancelikdev@gmail.com y eliminaremos de inmediato los datos correspondientes.",
      },
      {
        t: "11. Seguridad",
        b: "Todos los datos locales permanecen en tu dispositivo, protegidos por el aislamiento (sandbox) de iOS/macOS y el cifrado del dispositivo. Los datos de iCloud se cifran en la infraestructura de Apple. Los datos enviados a nuestro servidor se transmiten por HTTPS/TLS y se guardan en una base de datos cifrada; no contienen datos de identidad. Vakit también detecta jailbreak, depuradores e inyección de código para proteger mejor las operaciones sensibles.",
      },
      {
        t: "12. Cambios en esta política",
        b: "Esta política puede actualizarse a medida que la app evoluciona. Ante cambios importantes, se renueva la fecha de «Última actualización» de esta página y se muestra un aviso en la app. Te recomendamos revisar esta política periódicamente.",
      },
      {
        t: "13. Contacto",
        b: "Para preguntas, solicitudes o comentarios sobre privacidad: hakancelikdev@gmail.com\n\nResponsable del tratamiento: Hakan Çelik (Turquía)",
      },
    ],
  },

  terms: {
    meta: {
      title: "Vakit — Condiciones de uso",
      description: "Condiciones de uso de Vakit. De uso gratuito, con donaciones opcionales (compras dentro de la app); todas las funciones principales son gratuitas.",
    },
    title: "Condiciones de <em>uso</em>",
    desc: "Última actualización: 10 de septiembre de 2026 — Versión 1.7.4\n\nAl descargar, instalar o usar nuestra app, aceptas quedar vinculado por estas Condiciones. Léelas con atención.",
    sections: [
      {
        t: "1. Aceptación de las Condiciones",
        b: "Al acceder a Vakit y usarla, aceptas quedar vinculado por los términos y condiciones de este acuerdo. Si no estás de acuerdo, no uses este servicio.",
      },
      {
        t: "2. Descripción del servicio",
        b: "Vakit es una app gratuita que ofrece herramientas de adoración como horarios de oración, dirección de la alquibla, Corán, hadices, un contador de dhikr, guías de oración y ablución, seguimiento del jatm y de las adoraciones, el sermón del viernes, mezquitas cercanas y un calendario de días religiosos. Funciona en iOS 16.4+ y macOS 13+, e incluye una app complementaria para Apple Watch con watchOS 9+.",
      },
      {
        t: "3. Publicidad",
        b: "Vakit no muestra publicidad. La única fuente de ingresos de la app son las donaciones voluntarias de los usuarios.",
      },
      {
        t: "4. Publicidad",
        b: "Vakit no muestra publicidad. La única fuente de ingresos de la app son las donaciones voluntarias de los usuarios.",
      },
      {
        t: "5. App complementaria para Apple Watch",
        b: "Vakit incluye una app complementaria para watchOS 9+ con horarios de oración, la brújula de la alquibla y complicaciones. El uso de la app del Watch está sujeto a estas Condiciones. Debido a las limitaciones del hardware del Apple Watch (precisión del GPS, desviación de la brújula, batería), los resultados en el reloj pueden diferir de los del iPhone.",
      },
      {
        t: "6. Responsabilidades del usuario",
        b: "Eres responsable de:\n• Seleccionar una ubicación y un método de cálculo correctos\n• Usar la app conforme a las leyes aplicables y las normas del App Store\n• No intentar aplicar ingeniería inversa a la app, crackearla ni hacer un uso indebido de ella\n• Mantener seguros tu dispositivo y tu cuenta de iCloud (tus datos se sincronizan entre tus dispositivos a través de Apple iCloud)",
      },
      {
        t: "7. Servicios de terceros",
        b: "Vakit usa los siguientes servicios de terceros y está sujeta a sus propias condiciones:\n• Apple iCloud / CloudKit (sincronización de datos de usuario)\n• Apple MapKit (mezquitas cercanas, mapas)\n• Firebase Crashlytics, Remote Config y Cloud Messaging (Google)\n• Apple StoreKit 2 (donaciones)\n• Diyanet (texto y audio del sermón del viernes)\n• Biblioteca Adhan (cálculo de horarios de oración, código abierto)\n• SwiftAA (cálculo astronómico, código abierto)\n\nLas condiciones y políticas de privacidad de estos servicios pertenecen a sus respectivos proveedores.",
      },
      {
        t: "8. Propiedad intelectual",
        b: "El código y el diseño de la app pertenecen a Hakan Çelik; la app es de código abierto bajo la licencia MIT.\n\nVakit usa con respeto contenidos y bibliotecas de terceros:\n• Texto árabe del Corán: dominio público\n• Traducción turca: Diyanet İşleri Başkanlığı Meali\n• Colecciones de hadices: extraídas de compilaciones de dominio público\n• Audio de recitación del Corán: los permisos y licencias de los recitadores figuran en AUDIO-LICENSES.md\n• Adhan, SwiftAA, GRDB.swift: sus respectivas licencias de código abierto\n\nLa app usa el audio del adhán y de las recitaciones exclusivamente con fines de adoración religiosa.",
      },
      {
        t: "9. Limitación de responsabilidad",
        b: "La app se ofrece «tal cual». Los cálculos de horarios de oración y de la alquibla buscan ser exactos, pero:\n• Puede haber desviaciones debidas a la precisión de la ubicación, la señal GPS, la calibración de la brújula y el método de cálculo elegido.\n• Para decisiones religiosas importantes, se recomienda confirmar con las autoridades religiosas locales.\n• Los sensores del Apple Watch (brújula magnética, GPS) pueden añadir desviaciones adicionales.\n• Puede producirse una pérdida de datos por problemas de sincronización de iCloud, cortes de red o pérdida del dispositivo; haz copia de seguridad de los datos importantes.\n\nEl desarrollador no se hace responsable de los daños directos o indirectos derivados del uso de la app.",
      },
      {
        t: "10. Cuenta y eliminación de datos",
        b: "Vakit no requiere cuenta. Al eliminar la app se borran todos los datos locales. Para borrar los datos sincronizados con iCloud: Ajustes > Eliminar la cuenta, o en iOS Ajustes > ID de Apple > iCloud > Vakit > Eliminar datos (en el Mac, Ajustes del Sistema > Cuenta de Apple > iCloud). Si quieres que se borren las estadísticas de uso guardadas en nuestro servidor, escribe a hakancelikdev@gmail.com; tu solicitud se atiende en un plazo máximo de 30 días.",
      },
      {
        t: "11. Cambios en las Condiciones",
        b: "Estas Condiciones pueden actualizarse a medida que la app evoluciona y para reflejar requisitos legales. Ante cambios importantes, se renueva la fecha de «Última actualización» y se muestra un aviso en la app. Seguir usando la app supone aceptar las Condiciones actualizadas.",
      },
      {
        t: "12. Legislación aplicable y jurisdicción",
        b: "Estas Condiciones se rigen por las leyes de la República de Turquía. Las disputas se resolverán ante los tribunales turcos; en materia de derechos del consumidor, son competentes los tribunales de consumo locales. Si resides en la Unión Europea, se mantienen tus derechos locales como consumidor.",
      },
      {
        t: "13. Contacto",
        b: "Para preguntas sobre estas Condiciones: hakancelikdev@gmail.com\n\nDesarrollador: Hakan Çelik (Turquía)",
      },
    ],
  },

};
