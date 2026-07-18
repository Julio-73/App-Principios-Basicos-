

/* ── DICCIONARIO DE ICONOS SVG VECTORIALES ── */

var ICONS = {

  search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',

  book: '<svg viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>',

  users: '<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',

  crown: '<svg viewBox="0 0 24 24"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7z"></path><path d="M3 20h18"></path></svg>',

  scale: '<svg viewBox="0 0 24 24"><path d="m16 16 3-8 3 8c-.87.65-2.24 1-3 1s-2.13-.35-3-1Z"></path><path d="m2 16 3-8 3 8c-.87.65-2.24 1-3 1s-2.13-.35-3-1Z"></path><path d="M7 21h10"></path><path d="M12 3v18"></path><path d="M3 7h18"></path></svg>',

  contrast: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M12 2v20a10 10 0 0 0 0-20z" fill="currentColor"></path></svg>',

  cross: '<svg viewBox="0 0 24 24"><path d="M12 2v20M8 7h8"></path></svg>',

  church: '<svg viewBox="0 0 24 24"><path d="m12 3-10 9h3v8h14v-8h3L12 3z"></path><path d="M12 10v6M10 12h4"></path></svg>',

  scroll: '<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>',

  stethoscope: '<svg viewBox="0 0 24 24"><path d="m19 5-7 7-7-7"></path><path d="M12 12v10"></path><path d="M16 16H8"></path><circle cx="12" cy="3" r="1"></circle></svg>',

  video: '<svg viewBox="0 0 24 24"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>',

  target: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>',

  zap: '<svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',

  wifiOff: '<svg viewBox="0 0 24 24"><path d="M1 1l22 22M16.72 11.06A10.94 10.94 0 0 1 19 12.5M5 12.5a10.94 10.94 0 0 1 5.83-2.84M8.5 16.5a5 5 0 0 1 7 0M21.3 4.7a18.56 18.56 0 0 0-4-2.2M12 18h.01M5.3 5.3a18.66 18.66 0 0 0-2.6 1.6M12 2a18.72 18.72 0 0 1 6.8 1.3"></path></svg>',

  alert: '<svg viewBox="0 0 24 24"><path d="m10.29 3.86 7.92 13.17c.77 1.3.17 2.97-1.32 2.97H3.1c-1.49 0-2.09-1.67-1.32-2.97l7.92-13.17c.75-1.25 2.68-1.25 3.44 0zM12 9v4M12 17h.01"></path></svg>',

  close: '<svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'

};

/* ═══════════════════════════════════════════════════════════ BASE DE DATOS DE VERSÍCULOS COMPLETA (NVI CON NÚMEROS) ═══════════════════════════════════════════════════════════ */

var verses = {

'Salmo 119:1-2': '1 Dichosos los que son intachables en su conducta, los que viven conforme a la ley del Señor. 2 Dichosos los que cumplen sus estatutos y lo buscan de todo corazón;',

'Mateo 6:25-34': '25 »Por eso les digo: No se preocupen por su vida, qué van a comer o beber; ni por vuestro cuerpo, qué van a vestir. ¿No vale la vida más que la comida, y el cuerpo más que la ropa? 26 Fíjense en las aves del cielo: no siembran ni cosechan ni almacenan en graneros; sin embargo, el Padre celestial las alimenta. ¿No valen ustedes mucho más que ellas? 27 ¿Quién de ustedes, por mucho que se preocupe, puede añadir siquiera una hora al curso de su vida? 28 »Y por qué se preocupan por la ropa? Fíjense en cómo crecen los lirios del campo. No trabajan ni hilan. 29 Sin embargo, les digo que ni Salomón, con todo su esplendor, se vestía como uno de ellos. 30 Si así viste Dios a la hierba del campo, que hoy es y mañana es echada al horno, ¿no hará mucho más por ustedes, gente de poca fe? 31 »Así que no se preocupen diciendo: “¿Qué vamos a comer?” o “¿Qué vamos a beber?” o “¿Con qué nos vamos a vestir?”. 32 Los paganos se afanan por esas cosas, pero el Padre celestial sabe que ustedes las necesitan. 33 Más bien, busquen primeramente el reino de Dios y su justicia, y todas estas cosas les serán añadidas. 34 Por tanto, no se preocupen por el mañana, pues el mañana traerá sus propias preocupaciones. ¡Basta a cada día con sus propios problemas!',

'Hechos 17:24-28': '24 »El Dios que hizo el mundo y todo lo que en él hay, es Señor del cielo y de la tierra, y no vive en templos hechos por manos humanas. 25 Tampoco es atendido por manos humanas, como si necesitara algo, porque él es quien da vida y aliento y todas las cosas a todos. 26 De una sola sangre hizo a todas las naciones de los hombres, para que habitaran sobre toda la faz de la tierra; y determinó los períodos establecidos y los límites precisos de su habitación. 27 Todo esto lo hizo para que los hombres buscaran a Dios, y en algún modo lo hallaran, aunque ciertamente no está lejos de cada uno de nosotros. 28 Porque en él vivimos, y nos movemos, y somos; como algunos de vuestros propios poetas han dicho: Porque linaje suyo somos.',

'Juan 4:23-24': '23 »Sin embargo, llega la hora, y ya ha llegado, en que los verdaderos adoradores adorarán al Padre en espíritu y en verdad. El Padre busca adoradores así, 24 porque Dios es espíritu, y sus adoradores deben adorarlo en espíritu y en verdad.»',

'Jeremías 29:11-13': '11 »Porque yo sé muy bien los planes que tengo para ustedes —afirma el Señor—, planes de bienestar y no de calamidad, a fin de darles un futuro y una esperanza. 12 Entonces me invocarán, y vendrán a orarme, y yo los escucharé. 13 Me buscarán y me encontrarán cuando me busquen de todo corazón.',

'Hechos 8:26-39': '26 El ángel del Señor le dijo a Felipe: «Ponte en marcha hacia el sur, por el camino que baja de Jerusalén a Gaza». Este camino pasa por el desierto. 27 Felipe se puso en marcha, y sucedió que un etíope, eunuco y alto funcionario de Candaces, reina de Etiopía, encargado de todos sus tesoros, había ido a Jerusalén para adorar. 28 En su carro de regreso iba leyendo al profeta Isaías. 29 El Espíritu le dijo a Felipe: «Acércate a ese carro y mantente cerca de él». 30 Felipe corrió hacia el carro y oyó que el hombre estaba leyendo al profeta Isaías. Le preguntó: «¿Entiendes lo que vas leyendo?». 31 Él respondió: «¿Cómo voy a entenderlo si nadie me lo explica?». Así que invitó a Felipe a subir y a sentarse a su lado. 32 El pasaje de la Escritura que estaba leyendo era este: «Como oveja fue llevado al matadero; y como cordero mudo ante el que lo trasquila, así no abrió su boca. 33 En su humillación no se le hizo justicia. ¿Quién podrá contar su descendencia? Porque su vida fue quitada de la tierra». 34 El eunuco le preguntó a Felipe: «Dime, ¿de quién dice esto el profeta? ¿De sí mismo o de otro?». 35 Entonces Felipe, comenzando por ese pasaje de la Escritura, le anunció las buenas nuevas de Jesús. 36 Mientras seguían por el camino, llegaron a un lugar donde había agua, y el eunuco dijo: «Mira, aquí hay agua. ¿Qué impide que yo sea bautizado?». 37 Felipe contestó: «Sí puedes, si crees de todo corazón». El eunuco respondió: «Creo que Jesucristo es el Hijo de Dios». 38 Mandó parar el carro, y bajaron ambos al agua, y Felipe lo bautizó. 39 Cuando salieron del agua, el Espíritu del Señor arrebató a Felipe, y el eunuco no lo vio más, sino que siguió su camino lleno de alegría.',

'Mateo 7:7-8': '7 »Pidan, y se les dará; busquen, y encontrarán; llamen, y se les abrirá. 8 Porque todo el que pide, recibe; el que busca, encuentra; y al que llama, se le abre.',

'2 Timoteo 3:16-17': '16 Toda la Escritura es inspirada por Dios y útil para enseñar, para reprender, para corregir y para instruir en la justicia, 17 a fin de que el siervo de Dios esté enteramente capacitado para toda buena obra.',

'Hebreos 4:12-13': '12 Porque la palabra de Dios es viva y eficaz. Más cortante que cualquier espada de dos filos, penetra hasta dividir alma y espíritu, coyunturas y médulas, y discierne los pensamientos y las intenciones del corazón. 13 No hay nada creado que pueda esconderse de Dios; al contrario, todo está desnudo y expuesto ante los ojos de aquel a quien tenemos que rendir cuentas.',

'2 Pedro 1:19-21': '19 Tenemos también la palabra profética más segura, a la cual hacen bien en prestar atención, como a una lámpara que brilla en un lugar oscuro, hasta que el día amanezca y el lucero de la mañana salga en sus corazones. 20 Ante todo, tengan presente que ninguna profecía de la Escritura proviene de interpretación alguna, 21 porque jamás la profecía tuvo su origen en la voluntad humana, sino que los profetas hablaron de parte de Dios, impulsados por el Espíritu Santo.',

'Juan 8:31-32': '31 A los judíos que habían creído en él, Jesús les decía: «Si ustedes se mantienen firmes en mi palabra, serán verdaderamente mis discípulos. 32 Conocerán la verdad, y la verdad los hará libres».',

'Marcos 7:1-13': '1 Se reunieron alrededor de Jesús los fariseos y algunos maestros de la ley que habían venido de Jerusalén. 2 Al ver que algunos de los discípulos de Jesús comían con las manos sucias, es decir, sin lavárselas, los criticaron. 3 (Los fariseos y, en general, los judíos no comen sin lavarse cuidadosamente las manos, obedeciendo así la tradición de sus mayores. 4 Cuando regresan de la plaza, tampoco comen sin antes hacer ciertas abluciones. Y observan muchas otras tradiciones, como el lavado de copas, jarros y utensilios de metal). 5 Los fariseos y los maestros de la ley le preguntaron a Jesús: «¿Por qué tus discípulos no siguen la tradición de nuestros ancianos, sino que comen con las manos sucias?». 6 Él les contestó: «¡Hipócritas! Bien profetizó Isaías acerca de ustedes, como está escrito: “Este pueblo me honra con los labios, pero su corazón está lejos de mí. 7 En vano me rinden culto, porque enseñan doctrinas que son preceptos humanos”. 8 Ustedes dejan de lado el mandamiento de Dios para aferrarse a las tradiciones de los hombres». 9 Y añadió: «¡Qué bien saben ustedes cómo invalidar la palabra de Dios para mantener sus propias tradiciones!',

'1 Timoteo 4:16': '16 Cuídate a ti mismo y a tu enseñanza; persevera en estas cosas, pues haciéndolo te salvarás a ti mismo y a los que te escuchen.',

'Hechos 17:10-11': '10 En cuanto llegó la noche, los hermanos enviaron a Pablo y a Silas a Berea. Al llegar allá, fueron a la sinagoga de los judíos. 11 Estos eran de noble carácter, pues recibieron el mensaje con gran interés y examinaban las Escrituras todos los días para ver si las cosas eran así.',

'Santiago 1:22-25': '22 Lléven a la práctica la palabra, y no se limiten sólo a oírla, engañándose a sí mismos. 23 Porque si alguno se limita a oír la palabra pero no la pone en práctica, es semejante a alguien que observa su rostro natural en un espejo. 24 Se observa a sí mismo, se va y luego olvida cómo era. 25 Pero el que considera detenidamente la ley perfecta que da libertad, y persevera en ella, no como oidor olvidadizo sino como hacedor de la obra, será dichoso en lo que hace.',

'Juan 12:48': '48 »El que me rechaza y no acepta mis palabras tiene ya quien lo juzgue; la palabra que he hablado lo condenará en el día final.',

'Mateo 28:18-20': '18 Jesús se acercó a ellos y les dijo: «Se me ha dado toda autoridad en el cielo y en la tierra. 19 Por tanto, vayan y hagan discípulos de todas las naciones, bautizándolos en el nombre del Padre y del Hijo y del Espíritu Santo, 20 y enseñándoles a obedecer todo lo que les he mandado a ustedes. Y recuerden: yo estoy con ustedes siempre, hasta el fin del mundo».',

'Hechos 11:25-26': '25 Después Bernabé fue a Tarso a buscar a Saulo, y cuando lo encontró, lo llevó a Antioquía. 26 Durante todo un año se reunieron allí con la iglesia e instruyeron a mucha gente. Fue en Antioquía donde por primera vez se llamó cristianos a los discípulos.',

'Marcos 1:14-18': '14 Después de que Juan fue encarcelado, Jesús fue a Galilea a predicar el evangelio de Dios. 15 Decía: «Se ha cumplido el tiempo. El reino de Dios está cerca. ¡Arrepentíos y creed en el evangelio!». 16 Pasando junto al mar de Galilea, vio a Simón y a su hermano Andrés, que echaban las redes en el lago, pues eran pescadores. 17 Jesús les dijo: «Síganme, y los haré pescadores de hombres». 18 Inmediatamente dejaron las redes y lo siguieron.',

'Lucas 9:23-26': '23 Luego dijo a todos: «Si alguno quiere venir en pos de mí, niéguese a sí mismo, tome su cruz cada día y sígame. 24 Porque el que quiera salvar su vida, la perderá; pero el que pierda su vida por causa de mí, la salvará. 25 ¿De qué le sirve a uno ganar el mundo entero, si se pierde o se destruye a sí mismo? 26 El que se avergüence de mí y de mis palabras, de ése se avergonzará el Hijo del hombre cuando venga en su gloria y en la del Padre y de los santos ángeles.',

'Lucas 14:25-33': '25 Grandes multitudes iban con Jesús, y él, volviéndose, les dijo: 26 «Si alguno viene a mí y no aborrece a su padre y a su madre, a su mujer y a sus hijos, a sus hermanos y hermanas, y aun a su propia vida, no puede ser mi discípulo. 27 El que no carga su cruz y me sigue, no puede ser mi discípulo. 28 Supongamos que uno de ustedes quiere edificar una torre. ¿No se sienta primero a calcular el gasto, a ver si tiene dinero suficiente para terminarla? 29 No sea que después de haber puesto los cimientos, no pueda terminarla, y todos los que lo vean se burlen de él 30 diciendo: “Éste empezó a edificar y no pudo terminar”. 31 O supongamos que un rey sale a pelear contra otro rey. ¿No se sienta primero a considerar si con diez mil soldados puede hacer frente al que viene contra él con veinte mil? 32 Si no puede, mientras el otro está todavía lejos, le envía una embajada y le pide condiciones de paz. 33 De la misma manera, cualquiera de ustedes que no renuncie a todos sus bienes no puede ser mi discípulo».',

'Lucas 11:1-4': '1 Una vez, mientras Jesús estaba orando en cierto lugar, cuando terminó, uno de sus discípulos le dijo: «Señor, enséñanos a orar, como también Juan enseñó a sus discípulos». 2 Les dijo: «Cuando oren, digan: “Padre nuestro que estás en el cielo, santificado sea tu nombre. Venga tu reino. 3 Hágase tu voluntad, como en el cielo, así también en la tierra. Danos cada día nuestro pan cotidiano. 4 Perdona nuestros pecados, porque también nosotros perdonamos a todos los que nos deben. Y no nos dejes caer en tentación”».',

'Mateo 22:34-40': '34 Al oír los fariseos que Jesús había dejado sin respuesta a los saduceos, se reunieron. 35 Uno de ellos, experto en la ley, le tendió una trampa con esta pregunta: 36 «Maestro, ¿cuál es el mandamiento más importante de la ley?». 37 Jesús le respondió: «“Amarás al Señor tu Dios con todo tu corazón, con toda tu alma y con toda tu mente”. 38 Éste es el primero y el más importante de los mandamientos. 39 El segundo es semejante a éste: “Amarás a tu prójimo como a ti mismo”. 40 De estos dos mandamientos dependen toda la ley y los Profetas».',

'Juan 13:34-35': '34 »Les doy un mandamiento nuevo: ámense los unos a los otros. Así como yo los he amado, ámense también ustedes los unos a los otros. 35 En esto conocerán todos que ustedes son mis discípulos, si se aman los unos a los otros».',

'Isaías 2:1-4': '1 Lo que vieron Isaías hijo de Amoz, tocante a Judá y a Jerusalén: 2 En los últimos días acontecerá que el monte de la casa del Señor será establecido como cabeza de los montes, y será exaltado sobre los collados, y correrán a él todas las naciones. 3 Vendrán muchos pueblos, y dirán: «Venid, y subamos al monte del Señor, a la casa del Dios de Jacob, para que nos enseñe sus caminos, y andemos por sus sendas». Porque de Sion saldrá la ley, y de Jerusalén la palabra del Señor. 4 Juzgará entre las naciones, y reprenderá a muchos pueblos; y volverán sus espadas en rejas de arado, y sus lanzas en hoces; no alzará espada nación contra nación, ni se adiestrarán más para la guerra.',

'Daniel 2:31-45': '31 »Tú, oh rey, veías, y he aquí una gran imagen. Esta imagen, que estaba en pie delante de ti, era muy hermosa; su aspecto era formidable. 32 La cabeza de esta imagen era de oro fino; su pecho y sus brazos, de plata; su vientre y sus muslos, de bronce; 33 sus piernas, de hierro; sus pies, en parte de hierro y en parte de barro cocido. 34 Estabas mirando, hasta que una piedra fue cortada, no con mano, e hirió a la imagen en sus pies de hierro y de barro cocido, y los desmenuzó. 35 Entonces fueron desmenuzados también el hierro, el barro cocido, el bronce, la plata y el oro, y fueron como tamo de las eras del verano, y se los llevó el viento sin que de ellos quedara rastro alguno. Mas la piedra que hirió a la imagen fue hecha un gran monte que llenó toda la tierra. [...] 44 El Dios del cielo levantará un reino que no será jamás destruido, ni será el reino dejado a otro pueblo; desmenuzará y consumirá a todos estos reinos, pero él permanecerá para siempre.',

'Mateo 3:1-2': '1 En aquellos días vino Juan el Bautista predicando en el desierto de Judea, 2 y diciendo: «Arrepentíos, porque el reino de los cielos se ha acercado».',

'Mateo 4:17': '17 Desde entonces comenzó Jesús a predicar, y a decir: «Arrepentíos, porque el reino de los cielos se ha acercado».',

'Mateo 16:13-19': '13 Cuando Jesús llegó a la región de Cesarea de Filipo, preguntó a sus discípulos: «¿Quién dice la gente que es el Hijo del hombre?». 14 Ellos respondieron: «Unos dicen que eres Juan el Bautista; otros, Elías; y otros, Jeremías o alguno de los profetas». 15 «Y vosotros», les preguntó, «¿quién decís que soy yo?». 16 Respondiendo Simón Pedro, dijo: «Tú eres el Cristo, el Hijo del Dios viviente». 17 Entonces le respondió Jesús: «Bienaventurado eres, Simón, hijo de Jonás, porque no te lo reveló carne ni sangre, sino mi Padre que está en los cielos. 18 Y yo también te digo, que tú eres Pedro, y sobre esta roca edificaré mi iglesia; y las puertas del Hades no prevalecerán contra ella. 19 Y a ti te daré las llaves del reino de los cielos; y todo lo que atares en la tierra será atado en los cielos; y todo lo que desatares en la tierra será desatado en los cielos».',

'Marcos 9:1': '1 Y les dijo: «De cierto os digo que hay algunos de los que están aquí, que no gustarán la muerte hasta que hayan visto el reino de Dios venido con poder».',

'Juan 3:1-7': '1 Había un hombre de los fariseos que se llamaba Nicodemo, un dignatario de los judíos. 2 Este vino a Jesús de noche, y le dijo: «Rabí, sabemos que has venido de Dios como maestro; porque nadie puede hacer estas señales que tú haces, si no está Dios con él». 3 Respondió Jesús y le dijo: «De cierto, de cierto te digo, que el que no naciere de nuevo, no puede ver el reino de Dios». 4 Nicodemo le dijo: «¿Cómo puede un hombre nacer siendo viejo? ¿Puede acaso entrar por segunda vez en el vientre de su madre, y nacer?». 5 Respondió Jesús: «De cierto, de cierto te digo, que el que no naciere de agua y del Espíritu, no puede entrar en el reino de Dios. 6 Lo que es nacido de la carne, carne es; y lo que es nacido del Espíritu, espíritu es. 7 No te maravilles de que te dije: Os es necesario nacer de nuevo».',

'Lucas 23:50-51': '50 Y hubo un varón llamado José, miembro del concilio, varón bueno y justo. 51 Este no había consentido en el acuerdo ni en la acción de los otros. Era de Arimatea, ciudad de Judea, y esperaba también él el reino de Dios.',

'Lucas 24:44-49': '44 Y les dijo: «Estas son las palabras que os hablé, estando aún con vosotros: que era necesario que se cumpliese todo lo que está escrito de mí en la ley de Moisés, en los profetas y en los salmos». 45 Entonces les abrió el entendimiento, para que comprendiesen las Escrituras; 46 y les dijo: «Así está escrito, y así fue necesario que el Cristo padeciese, y resucitase de los muertos al tercer día; 47 y que se predicase en su nombre el arrepentimiento y el perdón de pecados en todas las naciones, comenzando desde Jerusalén. 48 Y vosotros sois testigos de estas cosas. 49 He aquí, yo enviaré la promesa de mi Padre sobre vosotros; pero quedaos vosotros en la ciudad de Jerusalén, hasta que seáis investidos de poder desde lo alto».',

'Hechos 1:1-26': '1 Habiendo hablado antes, oh Teófilo, de todas las cosas que Jesús comenzó a hacer y a enseñar, 2 hasta el día en que fue recibido arriba, después de haber dado mandamientos por el Espíritu Santo a los apóstoles que había escogido; 3 a quienes también, después de haber padecido, se presentó vivo con muchas pruebas indubitables, apareciéndoseles durante cuarenta días y hablándoles acerca del reino de Dios.',

'Hechos 2:1-47': '1 Cuando llegó el día de Pentecostés, estaban todos unánimes juntos. 2 Y de repente vino del cielo un estruendo como de un viento recio que soplaba, el cual llenó toda la casa donde estaban sentados; 3 y se les aparecieron lenguas repartidas, como de fuego, asentándose sobre cada uno de ellos. 4 Y fueron todos llenos del Espíritu Santo, y comenzaron a hablar en otras lenguas, según el Espíritu les daba que hablasen.',

'Hechos 2:22-24': '22 Varones israelitas, oíd estas palabras: Jesús nazareno, varón aprobado por Dios entre vosotros con las maravillas, prodigios y señales que Dios hizo entre vosotros por medio de él, como vosotros mismos sabéis; 23 a éste, entregado por el determinado consejo y anticipado conocimiento de Dios, prendisteis y matasteis en manos de inicuos, crucificándole; 24 al cual Dios levantó, sueltos los dolores de la muerte, por cuanto era imposible que fuese retenido por ella.',

'Hechos 2:36-41': '36 Sepa, pues, ciertísimamente toda la casa de Israel, que a este Jesús a quien vosotros crucificasteis, Dios le ha hecho Señor y Cristo. 37 Al oír esto, se compungieron de corazón, y dijeron a Pedro y a los otros apóstoles: «Varones hermanos, ¿qué haremos?». 38 Pedro les dijo: «Arrepentíos, y bautícese cada uno de vosotros en el nombre de Jesucristo para perdón de los pecados; y recibiréis el don del Espíritu Santo».',

'Hechos 2:42-47': '42 Y perseveraban en la doctrina de los apóstoles, en la comunión unos con otros, en el partimiento del pan y en las oraciones. 43 Y sobrevino temor a toda persona; y muchas maravillas y señales eran hechas por los apóstoles. 44 Todos los que habían creído estaban juntos, y tenían en común todas las cosas; 45 y vendían sus propiedades y sus bienes, y lo repartían a todos según la necesidad de cada uno.',

'Mateo 6:33': '33 Mas buscad primeramente el reino de Dios y su justicia, y todas estas cosas os serán añadidas.',

'Isaías 59:1-2': '1 He aquí que no se ha acortado la mano de Jehová para salvar, ni se ha agravado su oído para oír; 2 pero vuestras iniquidades han hecho división entre vosotros y vuestro Dios, y vuestros pecados han hecho ocultar de vosotros su rostro para no oír.',

'Romanos 3:23': '23 por cuanto todos pecaron, y están destituidos de la gloria de Dios.',

'Gálatas 5:19-21': '19 Y manifiestas son las obras de la carne, que son: adulterio, fornicación, inmundicia, lascivia, 20 idolatría, hechicerías, enemistades, pleitos, celos, iras, contiendas, disensiones, herejías, 21 envidias, homicidios, borracheras, orgías, y cosas semejantes a estas; acerca de las cuales os amonesto, como ya os lo he dicho antes, que los que practican tales cosas no heredarán el reino de Dios.',

'2 Timoteo 3:1-5': '1 También debes saber esto: que en los postreros días vendrán tiempos peligrosos. 2 Porque habrá hombres amadores de sí mismos, avaros, vanagloriosos, soberbios, blasfemos, desobedientes a los padres, ingratos, impíos, 3 sin afecto natural, implacables, sin misericordia, despiadados, calumniadores, sin dominio propio, crueles, aborrecedores de lo bueno, 4 traidores, impetuosos, infatuados, amadores de los deleites más que de Dios, 5 que tendrán apariencia de piedad, pero negarán la eficacia de ella; a éstos evita.',

'Santiago 4:17': '17 Y al que sabe hacer lo bueno y no lo hace, le es pecado.',

'Santiago 5:16': '16 Confesaos vuestras ofensas unos a otros, y orad unos por otros, para que seáis sanados. La oración eficaz del justo puede mucho.',

'Romanos 6:23': '23 Porque la paga del pecado es muerte, mas la dádiva de Dios es vida eterna en Cristo Jesús Señor nuestro.',

'2 Corintios 7:8-11': '8 Porque aunque os contristé con la carta, no me pesa, aunque antes me pesaba; porque veo que aquella carta os contristó, aunque sea por un poco. 9 Ahora me gozo, no porque hayáis sido contristados, sino porque fuisteis contristados para arrepentimiento; porque habéis sido contristados según Dios, para que ninguna pérdida padecieseis por nuestra parte.',

'Lucas 13:1-5': '1 En este mismo tiempo estaban allí algunos que le contaban acerca de los galileos cuya sangre Pilato había mezclado con los sacrificios de ellos. 2 Respondiendo Jesús, les dijo: «¿Pensáis que estos galileos, porque padecieron tales cosas, fueron más pecadores que todos los galileos? 3 Os digo: No; antes si no os arrepentís, todos pereceréis igualmente».',

'Colosenses 3:5-10': '5 Haced morir, pues, lo terrenal en vosotros: fornicación, impureza, pasiones desordenadas, malos deseos y avaricia, que es idolatría; 6 cosas por las cuales la ira de Dios viene sobre los hijos de desobediencia, 7 en las cuales vosotros también anduvisteis en otro tiempo cuando vivíais en ellas. 8 Pero ahora dejad también vosotros todas estas cosas: ira, enojo, malicia, blasfemia, palabras deshonestas de vuestra boca.',

'Mateo 5:27-30': '27 Oísteis que fue dicho: No cometerás adulterio. 28 Pero yo os digo que cualquiera que mira a una mujer para codiciarla, ya adulteró con ella en su corazón. 29 Por tanto, si tu ojo derecho te es ocasión de caer, sácalo, y échalo de ti; pues mejor te es que se pierda uno de tus miembros, y no que todo tu cuerpo sea echado al infierno.',

'Hechos 26:20': '20 sino que anuncié primeramente a los que están en Damasco, y Jerusalén, y por toda la tierra de Judea, y a los gentiles, que se arrepintiesen y se convirtiesen a Dios, haciendo obras dignas de arrepentimiento.',

'1 Pedro 2:9-10': '9 Mas vosotros sois linaje escogido, real sacerdocio, nación santa, pueblo adquirido por Dios, para que anunciéis las virtudes de aquel que os llamó de las tinieblas a su luz admirable; 10 vosotros que en otro tiempo no erais pueblo, pero que ahora sois pueblo de Dios; que en otro tiempo no habíais alcanzado misericordia, pero ahora habéis alcanzado misericordia.',

'Hechos 2:37': '37 Al oír esto, se compungieron de corazón, y dijeron a Pedro y a los otros apóstoles: «Varones hermanos, ¿qué haremos?».',

'Hechos 2:38-42': '38 Pedro les dijo: «Arrepentíos, y bautícese cada uno de vosotros en el nombre de Jesucristo para perdón de los pecados; y recibiréis el don del Espíritu Santo. 39 Porque para vosotros es la promesa, y para vuestros hijos, y para todos los que están lejos; para cuantos el Señor nuestro Dios llamare».',

'Romanos 6:1-8': '1 ¿Qué, pues, diremos? ¿Perseveraremos en el pecado para que la gracia abunde? En ninguna manera. 2 Porque los que hemos muerto al pecado, ¿cómo viviremos aún en él? 3 ¿O no sabéis que todos los que hemos sido bautizados en Cristo Jesús, hemos sido bautizados en su muerte? 4 Porque somos sepultados juntamente con él para muerte por el bautismo, a fin de que como Cristo resucitó de los muertos por la gloria del Padre, así también nosotros andemos en vida nueva.',

'Colosenses 2:11-12': '11 En él también fuisteis circuncidados con circuncisión no hecha a mano, al echar de vosotros el cuerpo pecaminoso carnal, en la circuncisión de Cristo; 12 sepultados con él en el bautismo, en el cual fuisteis también resucitados con él, mediante la fe en el poder de Dios que le levantó de los muertos.',

'Mateo 15:6-9': '6 no honrará a su padre o a su madre. Así habéis invalidado la palabra de Dios por vuestra tradición. 7 Hipócritas, bien profetizó de vosotros Isaías, cuando dijo: Este pueblo de labios me honra; Mas su corazón está lejos de mí. 8 Pues en vano me honran, Enseñando como doctrinas, mandamientos de hombres.',

'1 Pedro 3:18-22': '18 Porque también Cristo padeció una sola vez por los pecados, el justo por los injustos, para llevarnos a Dios, siendo a la verdad muerto en la carne, pero vivificado en espíritu; 19 en el cual también fue y predicó a los espíritus encarcelados, 20 los que en otro tiempo desobedecieron, cuando una vez esperaba la paciencia de Dios en los días de Noé, mientras se preparaba el arca, en la cual pocas personas, es decir, ocho, fueron salvadas por agua.',

'Mateo 26:31-68': '31 Entonces Jesús les dijo: Todos vosotros os escandalizaréis de mí esta noche; porque escrito está: Heriré al pastor, y las ovejas del rebaño serán dispersadas. 32 Y después que haya resucitado, iré delante de vosotros a Galilea. 33 Respondiendo Pedro, le dijo: Aunque todos se escandalicen de ti, yo nunca me escandalizaré. 34 Jesús le dijo: De cierto te digo que esta noche, antes que el gallo cante, me negarás tres veces. 35 Pedro le dijo: Aunque me sea necesario morir contigo, no te negaré. Y todos los discípulos dijeron lo mismo. 36 Entonces llegó Jesús con ellos a un lugar que se llama Getsemaní, y dijo a sus discípulos: Sentaos aquí, entre tanto que voy allí y oro. 37 Y tomando a Pedro, y a los dos hijos de Zebedeo, comenzó a entristecerse y a angustiarse en gran manera. 38 Entonces Jesús les dijo: Triste está mi alma hasta la muerte; quedaos aquí, y velad conmigo. 39 Yendo un poco adelante, se postró sobre su rostro, orando y diciendo: Padre mío, si es posible, pase de mí esta copa; pero no sea como yo quiero, sino como tú.',

'Mateo 26:69-75': '69 Pero Pedro estaba sentado fuera en el patio; y se le acercó una criada, diciendo: Tú también estabas con Jesús el galileo. 70 Mas él negó delante de todos, diciendo: No sé lo que dices. 71 Y saliendo él a la puerta, le vio otra, y dijo a los que estaban allí: También éste estaba con Jesús nazareno. 72 Y negó otra vez con juramento: No conozco al hombre. 73 Poco después, acercándose los que estaban allí, dijeron a Pedro: Verdaderamente también tú eres de ellos, porque aun tu manera de hablar te descubre. 74 Entonces comenzó a maldecir y a jurar: No conozco al hombre. Y enseguida cantó el gallo. 75 Entonces Pedro se acordó de las palabras que Jesús le había dicho: Antes que el gallo cante, me negarás tres veces. Y saliendo de allí, lloró amargamente.',

'Mateo 27:1-10': '1 Venida la mañana, todos los principales sacerdotes y los ancianos del pueblo entraron en consejo contra Jesús, para entregarle a muerte. 2 Y le llevaron atado, y le entregaron a Poncio Pilato, el gobernador. 3 Entonces Judas, el que le había entregado, viendo que era condenado, devolvió las treinta piezas de plata a los principales sacerdotes y a los ancianos, diciendo: Yo he pecado entregando sangre inocente. 4 Mas ellos dijeron: ¿Qué nos importa a nosotros? ¡Allá tú! Y arrojando las piezas de plata en el templo, salió, y fue y se ahorcó.',

'Mateo 27:11-26': '11 Y fue presentado Jesús ante el gobernador; y el gobernador le preguntó, diciendo: ¿Eres tú el Rey de los judíos? Y Jesús le dijo: Tú lo dices. 12 Y siendo acusado por los principales sacerdotes y por los ancianos, no respondió nada. 13 Pilato entonces le dijo: ¿No oyes cuántas cosas testifican contra ti? Pero él no le respondió ni una palabra; de modo que el gobernador se maravillaba mucho. 14 Y viendo Pilato que nada adelantaba, sino que se hacía más alboroto, tomó agua y se lavó las manos delante del pueblo, diciendo: Inocente soy yo de la sangre de este justo; allá vosotros. 15 Y respondiendo todo el pueblo, dijo: Su sangre sea sobre nosotros, y sobre nuestros hijos. 16 Entonces les soltó a Barrabás; y después de azotar a Jesús, le entregó para ser crucificado.',

'Mateo 27:27-56': '27 Entonces los soldados del gobernador llevaron a Jesús al pretorio, y reunieron alrededor de él a toda la compañía. 28 Y desnudándole, le echaron encima un manto de escarlata; 29 y pusieron sobre su cabeza una corona tejida de espinas, y una caña en su mano derecha; e hincando la rodilla delante de él, le escarnecían, diciendo: ¡Salve, Rey de los judíos! 30 Y escupiendo en él, tomaron la caña y le golpeaban en la cabeza. 31 Después de haberle escarnecido, le desnudaron el manto, y le vistieron sus propios vestidos, y le llevaron para crucificarle. 32 Y cuando le hubieron crucificado, repartieron entre sí sus vestidos, echando suertes; 33 y sentados le guardaban allí. 34 Y pusieron sobre su cabeza su causa escrita: ESTE ES JESUS, EL REY DE LOS JUDIOS. 35 Entonces crucificaron con él a dos ladrones, uno a la derecha y otro a la izquierda. 36 Y los que pasaban le injuriaban, meneando la cabeza y diciendo: 37 Tú, el que derribas el templo, y en tres días lo reedificas, sálvate a ti mismo; si eres Hijo de Dios, desciende de la cruz. 38 Y desde la hora sexta hubo tinieblas sobre toda la tierra hasta la hora novena. 39 Cerca de la hora novena, Jesús clamó a gran voz, diciendo: Elí, Elí, ¿lama sabactani? Esto es: Dios mío, Dios mío, ¿por qué me has desamparado? 40 Mas Jesús, habiendo otra vez clamado a gran voz, entregó el espíritu. 41 Y he aquí, el velo del templo se rasgó en dos, de arriba abajo; y la tierra tembló, y las rocas se partieron.',

'Mateo 27:62-66': '62 Al día siguiente, que es después de la preparación, se reunieron los principales sacerdotes y los fariseos ante Pilato, 63 diciendo: Señor, nos acordamos que aquel engañador dijo, viviendo aún: Después de tres días resucitaré. 64 Manda, pues, que se asegure el sepulcro hasta el tercer día, no sea que vengan sus discípulos de noche, y lo hurten, y digan al pueblo: Resucitó de entre los muertos. 65 Y Pilato les dijo: Ahí tenéis una guardia; id y aseguradlo como sabéis. 66 Ellos fueron y aseguraron el sepulcro, sellando la piedra y poniendo la guardia.',

'Mateo 28:1-10': '1 Pasado el día de reposo, al amanecer del primer día de la semana, vinieron María Magdalena y la otra María, a ver el sepulcro. 2 Y hubo un gran terremoto; porque un ángel del Señor, descendiendo del cielo y llegando, removió la piedra, y se sentó sobre ella. 3 Su aspecto era como un relámpago, y su vestido blanco como la nieve. 4 Y de miedo de él los guardas temblaron y se quedaron como muertos. 5 Mas el ángel, respondiendo, dijo a las mujeres: No temáis vosotras; porque yo sé que buscáis a Jesús, el que fue crucificado. 6 No está aquí, pues ha resucitado, como dijo. Venid, ved el lugar donde fue puesto el Señor. 7 Y mientras iban a dar las nuevas a los discípulos, he aquí, Jesús les salió al encuentro, diciendo: ¡Salve! Y ellas, acercándose, abrazaron sus pies, y le adoraron.',

'Isaías 53:4-6': '4 Ciertamente llevó él nuestras enfermedades, y sufrió nuestros dolores; y nosotros le tuvimos por azotado, por herido de Dios y abatido. 5 Mas él herido fue por nuestras rebeliones, molido por nuestros pecados; el castigo de nuestra paz fue sobre él, y por su llaga fuimos nosotros curados. 6 Todos nosotros nos descarriamos como ovejas, cada cual se apartó por su camino; mas Jehová cargó en él el pecado de todos nosotros.',

'Proverbios 13:5': '5 El justo aborrece la palabra de mentira; Mas el impío se hace odioso y confuso.',

'1 Pedro 2:21-24': '21 Pues para esto fuisteis llamados; porque también Cristo padeció por nosotros, dejándonos ejemplo, para que sigáis sus pisadas; 22 el cual no hizo pecado, ni se halló engaño en su boca; quien cuando le maldecían, no respondía con maldición, cuando padecía, no amenazaba, sino encomendaba la causa al que juzga justamente; 23 quien llevó él mismo nuestros pecados en su cuerpo sobre el madero, para que nosotros, estando muertos a los pecados, vivamos a la justicia; y por cuya llaga fuisteis sanados.',

'2 Corintios 5:21': '21 Al que no conoció pecado, por nosotros lo hizo pecado, para que nosotros fuésemos hechos justicia de Dios en él.',

'Colosenses 1:15-18': '15 El es la imagen del Dios invisible, el primogénito de toda creación. 16 Porque en él fueron creadas todas las cosas, las que hay en los cielos y las que hay en la tierra, visibles e invisibles; sean tronos, sean dominios, sean principados, sean potestades; todo fue creado por medio de él y para él. 17 Y él es antes de todas las cosas, y todas las cosas en él subsisten; 18 y él es la cabeza del cuerpo que es la iglesia, él que es el principio, el primogénito de entre los muertos, para que en todo tenga la preeminencia.',

'Efesios 2:19-22': '19 Así que ya no sois extranjeros ni advenedizos, sino conciudadanos de los santos, y miembros de la familia de Dios, 20 edificados sobre el fundamento de los apóstoles y profetas, siendo la principal piedra del ángulo Jesucristo mismo, 21 en quien todo el edificio, bien coordinado, va creciendo para ser un templo santo en el Señor.',

'1 Corintios 12:12-13': '12 Porque así como el cuerpo es uno, y tiene muchos miembros, pero todos los miembros del cuerpo, siendo muchos, son un solo cuerpo, así también Cristo. 13 Porque por un solo Espíritu fuimos todos bautizados en un cuerpo, sean judíos o griegos, sean esclavos o libres; y a todos se nos dio a beber de un mismo Espíritu.',

'1 Corintios 1:10-13': '10 Os ruego, pues, hermanos, por el nombre de nuestro Señor Jesucristo, que habléis todos una misma cosa, y que no haya entre vosotros divisiones, 11 sino que estéis perfectamente unidos en una misma mente y en un mismo parecer. 12 Porque digo que cada uno de vosotros dice: Yo soy de Pablo; y yo de Apolos; y yo de Cefas; y yo de Cristo. 13 ¿Acaso está dividido Cristo? ¿Fue crucificado Pablo por vosotros? ¿O fuisteis bautizados en el nombre de Pablo?',

'Efesios 4:4-6': '4 Un cuerpo, y un Espíritu, como fuisteis también llamados en una misma esperanza de vuestra vocación; 5 un Señor, una fe, un bautismo, 6 un Dios y Padre de todos, el cual es sobre todos, y por todos, y en todos.',

'Romanos 12:4-5': '4 Porque de la manera que en un cuerpo tenemos muchos miembros, pero no todos los miembros tienen la misma función, 5 así nosotros, siendo muchos, somos un cuerpo en Cristo, y todos miembros los unos de los otros.',

'1 Corintios 12:14-27': '14 Además, el cuerpo no es un solo miembro, sino muchos. 15 Si dijere el pie: Porque no soy mano, no soy del cuerpo, ¿por eso no será del cuerpo? 16 Y si dijere la oreja: Porque no soy ojo, no soy del cuerpo, ¿por eso no será del cuerpo? 17 Si todo el cuerpo fuese ojo, ¿dónde estaría el oído? Si todo fuese oído, ¿dónde estaría el olfato? 18 Mas ahora Dios ha colocado los miembros cada uno de ellos en el cuerpo, como él quiso.',

'Hebreos 10:23-25': '23 Mantengamos firme, sin fluctuar, la profesión de nuestra esperanza, porque fiel es el que prometió. 24 Y considerémonos unos a otros para estimularnos al amor y a las buenas obras; 25 no dejando de congregarnos, como algunos tienen por costumbre, sino exhortándonos; y tanto más, cuanto veis que aquel día se acerca.',

'1 Corintios 7:39': '39 La mujer casada está ligada por la ley al marido mientras éste vive; pero si el marido muriere, libre es de casarse con quien quiera, solamente que sea en el Señor.',

'2 Corintios 6:14-18': '14 No os unáis en yugo desigual con los incrédulos; porque ¿qué compañerismo tiene la justicia con la injusticia? ¿Y qué comunión la luz con las tinieblas? 15 ¿Y qué concordia Cristo con Belial? ¿O qué parte el creyente con el incrédulo?',

'1 Corintios 16:1-2': '1 En cuanto a la ofrenda para los santos, haced vosotros también de la manera que ordené en las iglesias de Galacia. 2 Cada primer día de la semana cada uno de vosotros ponga aparte algo, según haya prosperado.',

'2 Corintios 9:6-8': '6 Pero esto digo: El que siembra escasamente, también segará escasamente; y el que siembra generosamente, generosamente también segará. 7 Cada uno dé como propuso en su corazón: no con tristeza, ni por necesidad, porque Dios ama al dador alegre.',

'Hechos 13:47': '47 Porque así nos ha mandado el Señor, diciendo: Te he puesto para luz de los gentiles, A fin de que seas para salvación hasta lo postrero de la tierra.',

'Números 27:12-18': '12 Y Jehová dijo a Moisés: Sube a este monte de Abarim, y verás la tierra que he dado a los hijos de Israel. 13 Y cuando la hubieres visto, también tú serás reunido con tu pueblo, como fue reunido tu hermano Aarón.',

'1 Corintios 4:15-17': '15 Porque aunque tengáis diez mil ayos en Cristo, no tendréis muchos padres; pues en Cristo Jesús yo os engendré por medio del evangelio. 16 Por tanto, os ruego que me imitéis.',

'2 Timoteo 3:14-17': '14 Pero persiste tú en lo que has aprendido y te persuadiste, sabiendo de quién has aprendido; 15 y que desde la niñez has sabido las Sagradas Escrituras, las cuales te pueden hacer sabio para la salvación por la fe que es en Cristo Jesús.',

'Génesis 2:19': '19 Jehová Dios formó, pues, de la tierra toda bestia del campo, y toda ave de los cielos, y las trajo a Adán para que viese cómo las había de llamar; y todo lo que Adán llamó a los animales vivientes, ese es su nombre.',

'Marcos 7:20-22': '20 Pero lo que sale del hombre, eso es lo que contamina al hombre. 21 Porque de dentro, del corazón de los hombres, salen los malos pensamientos, los adulterios, las fornicaciones, 22 los homicidios, los hurtos, las avaricias, las maldades, el engaño, la lascivia, la envidia, la maledicencia, la soberbia, la insensatez.',

'Efesios 5:1-7': '1 Sed, pues, imitadores de Dios como hijos amados. 2 Y andad en amor, como también Cristo nos amó, y se entregó a sí mismo por nosotros, ofrenda y sacrificio a Dios en olor fragante. 3 Pero fornicación y toda inmundicia, o avaricia, ni aun se nombre entre vosotros, como conviene a santos;',

'1 Corintios 6:7-10': '7 Así que, por cierto es ya una falta que tengáis pleitos entre vosotros mismos. ¿Por qué no sufrís más bien el agravio? ¿Por qué no sufrís más bien el ser defraudados? 8 ¿O no sabéis que los injustos no heredarán el reino de Dios? No erréis; ni los fornicarios, ni los idólatras, ni los adúlteros, ni los afeminados, ni los que se echan con varones, 9 ni los ladrones, ni los avaros, ni los borrachos, ni los maldicientes, ni los estafadores, heredarán el reino de Dios.',

'Juan 19:34': '34 Pero uno de los soldados le abrió el costado con una lanza, y al instante salió sangre y agua.',

'Salmo 22:14': '14 He sido derramado como aguas, Y todos mis huesos se descoyuntaron; Mi corazón fue como cera, Derritiéndose en medio de mis entrañas.',

'Juan 19': '1 Entonces Pilato tomó a Jesús, y le azotó. 2 Y los soldados pusieron una corona de espinas sobre su cabeza, y le vistieron con un manto de púrpura; 3 y le decían: ¡Salve, Rey de los judíos! y le daban de bofetadas.',

'1 Timoteo 3:15': '15 para que si tardo, sepas cómo debes conducirte en la casa de Dios, que es la iglesia del Dios viviente, columna y baluarte de la verdad.',

'Romanos 6:3-4': '3 ¿O no sabéis que todos los que hemos sido bautizados en Cristo Jesús, hemos sido bautizados en su muerte? 4 Porque somos sepultados juntamente con él para muerte por el bautismo, a fin de que como Cristo resucitó de los muertos por la gloria del Padre, así también nosotros andemos en vida nueva.'

};

/* ── MODAL SYSTEM ───────────────────────────────── */

function openModal(ref) {

  S.curVerseRef = ref;

  var modal = document.getElementById('verseModal');

  var title = document.getElementById('modalTitle');

  var verse = document.getElementById('modalVerse');

  var favBtn = document.getElementById('modalFavBtn');

  var favs = sGet('ici_favs', []);

  if (favBtn) {

    if (favs.indexOf(ref) !== -1) {

      favBtn.classList.add('active');

    } else {

      favBtn.classList.remove('active');

    }

  }

  // Highlights state
  var highlights = sGet('ici_highlights', {});
  var activeColor = highlights[ref];
  
  if (verse) {
    verse.className = 'modal-verse';
    if (activeColor) {
      verse.classList.add('hl-text-' + activeColor);
    }
  }
  
  document.querySelectorAll('#modalHighlightBar .hl-dot').forEach(function(dot) {
    dot.classList.remove('active');
    if (activeColor && dot.classList.contains('hl-' + activeColor)) {
      dot.classList.add('active');
    }
  });

  title.textContent = ref;

  verse.innerHTML = '<div class="skeleton-container">' +
    '<div class="skeleton-line" style="width: 90%;"></div>' +
    '<div class="skeleton-line" style="width: 95%;"></div>' +
    '<div class="skeleton-line" style="width: 80%;"></div>' +
    '<div class="skeleton-line" style="width: 65%;"></div>' +
    '</div>';

  modal.classList.add('active');

  document.body.style.overflow = 'hidden';

  setTimeout(function(){
    var cleanRef = ref.split(' — ')[0].split(' - ')[0].trim();
    var text = verses[cleanRef] || verses[ref];
    if (text) {
      verse.textContent = text;
    } else {
      verse.innerHTML = '<p style="color:var(--muted);text-align:center;font-style:normal;">Versículo no disponible offline.<br><br><a href="https://www.biblegateway.com/passage/?search=' + encodeURIComponent(ref) + '&version=NVI" target="_blank" style="color:var(--gold);text-decoration:underline;">Leer ' + ref + ' en Bible Gateway (NVI) →</a></p>';
    }
  }, 450);

}

function toggleFavorite() {

  var ref = S.curVerseRef;

  if (!ref) return;

  var favs = sGet('ici_favs', []);

  var idx = favs.indexOf(ref);

  var favBtn = document.getElementById('modalFavBtn');

  if (idx !== -1) {

    favs.splice(idx, 1);

    if (favBtn) favBtn.classList.remove('active');

  } else {

    favs.push(ref);

    if (favBtn) favBtn.classList.add('active');

  }

  sSet('ici_favs', favs);

  buildFavs();

}

function removeFavorite(ref, e) {

  if (e) e.stopPropagation();

  var favs = sGet('ici_favs', []);

  var idx = favs.indexOf(ref);

  if (idx !== -1) {

    favs.splice(idx, 1);

    sSet('ici_favs', favs);

  }

  buildFavs();

  if (S.curVerseRef === ref) {

    var favBtn = document.getElementById('modalFavBtn');

    if (favBtn) favBtn.classList.remove('active');

  }

}

function buildFavs() {

  var favList = document.getElementById('sbFavList');

  if (!favList) return;

  var favs = sGet('ici_favs', []);

  if (favs.length === 0) {

    favList.innerHTML = '<div style="font-size:12px;color:var(--muted);text-align:center;padding:10px 0;">Ningún versículo guardado</div>';

    return;

  }

  favList.innerHTML = favs.map(function(ref) {

    return '<div class="sb-fav-item" onclick="openModal(\'' + ref + '\')"><span>📖 ' + ref + '</span><button class="sb-fav-del" onclick="removeFavorite(\'' + ref + '\', event)" aria-label="Eliminar de favoritos">✕</button></div>';

  }).join('');

}

function buildHighlights() {
  var hlList = document.getElementById('sbHlList');
  if (!hlList) return;
  
  var highlights = sGet('ici_highlights', {});
  var keys = Object.keys(highlights);
  
  if (keys.length === 0) {
    hlList.innerHTML = '<div style="font-size:12px;color:var(--muted);text-align:center;padding:10px 0;">Ningún versículo resaltado</div>';
    return;
  }
  
  hlList.innerHTML = keys.map(function(ref) {
    var color = highlights[ref];
    var colorName = color === 'yellow' ? 'Amarillo' : color === 'green' ? 'Verde' : color === 'blue' ? 'Azul' : 'Rosa';
    return '<div class="sb-hl-item hl-item-' + color + '" onclick="openModal(\'' + ref + '\')"><span>📖 ' + ref + '</span><span class="sb-hl-dot-indicator color-' + color + '"></span></div>';
  }).join('');
}

function applyCardHighlights() {
  var highlights = sGet('ici_highlights', {});
  
  document.querySelectorAll('.sc-card').forEach(function(card) {
    card.classList.remove('hl-card-yellow', 'hl-card-green', 'hl-card-blue', 'hl-card-pink');
  });
  
  document.querySelectorAll('.sc-card').forEach(function(card) {
    var refEl = card.querySelector('.sc-ref');
    if (refEl) {
      var refText = refEl.textContent.trim();
      var baseRef = refText.split(' — ')[0].trim();
      
      if (highlights[baseRef]) {
        card.classList.add('hl-card-' + highlights[baseRef]);
      }
    }
  });
}

function highlightCurrentVerse(color) {
  var ref = S.curVerseRef;
  if (!ref) return;
  
  var highlights = sGet('ici_highlights', {});
  var modalVerse = document.getElementById('modalVerse');
  
  document.querySelectorAll('#modalHighlightBar .hl-dot').forEach(function(dot) {
    dot.classList.remove('active');
  });
  
  if (modalVerse) {
    modalVerse.className = 'modal-verse';
  }
  
  if (color === 'clear') {
    delete highlights[ref];
  } else {
    highlights[ref] = color;
    if (modalVerse) {
      modalVerse.classList.add('hl-text-' + color);
    }
    var activeDot = document.querySelector('#modalHighlightBar .hl-dot.hl-' + color);
    if (activeDot) activeDot.classList.add('active');
  }
  
  sSet('ici_highlights', highlights);
  buildHighlights();
  applyCardHighlights();
}

function shareVerse() {
  var ref = S.curVerseRef;
  if (!ref) return;

  var cleanRef = ref.split(' — ')[0].split(' - ')[0].trim();
  var text = verses[cleanRef] || verses[ref];
  if (!text) return;

  var shareText = '✝️ *' + cleanRef + '*\n\n"' + text + '"\n\nEstudia los Principios Básicos de la Biblia en:\nhttps://julio-73.github.io/App-Principios-Basicos-/';

  if (navigator.share) {
    navigator.share({
      title: cleanRef,
      text: shareText
    }).then(function() {
      console.log('Compartido con éxito');
    }).catch(function(err) {
      console.log('Error al compartir:', err);
    });
  } else {
    navigator.clipboard.writeText(shareText).then(function() {
      var btn = document.getElementById('modalShareBtn');
      if (btn) {
        var oldHTML = btn.innerHTML;
        btn.innerHTML = '<span style="font-family:\'Outfit\',sans-serif;font-weight:600;font-size:14px;color:var(--gold);">✓ Copiado</span>';
        setTimeout(function() {
          btn.innerHTML = oldHTML;
        }, 2000);
      } else {
        alert('¡Versículo copiado al portapapeles! 📲');
      }
    }).catch(function() {
      alert('No se pudo copiar el texto automáticamente.');
    });
  }
}

function initNotes(idx) {

  var view = document.getElementById('pv' + idx);

  if (!view) return;

  var questions = view.querySelectorAll('li.q');

  questions.forEach(function(q, qIdx) {

    var nextEl = q.nextElementSibling;

    if (nextEl && nextEl.classList.contains('note-box')) return;

    var noteBox = document.createElement('div');

    noteBox.className = 'note-box';

    var noteKey = 'ici_note_' + idx + '_' + qIdx;

    var savedNote = localStorage.getItem(noteKey) || '';

    var textarea = document.createElement('textarea');

    textarea.placeholder = 'Escribe tu respuesta/reflexión aquí... (se guarda automáticamente)';

    textarea.value = savedNote;

    textarea.addEventListener('input', function() {

      localStorage.setItem(noteKey, textarea.value);

    });

    noteBox.appendChild(textarea);

    q.parentNode.insertBefore(noteBox, q.nextSibling);

  });

}

function exportNotes(idx) {

  var p = PP[idx];

  var text = 'ESTUDIO BÍBLICO: ' + p.titulo.toUpperCase() + '\n';

  text += 'Iglesias Cristianas Internacionales\n';

  text += '==================================================\n\n';

  var view = document.getElementById('pv' + idx);

  if (!view) return;

  var questions = view.querySelectorAll('li.q');

  var notesCount = 0;

  questions.forEach(function(q, qIdx) {

    var questionText = q.textContent.trim();

    var noteKey = 'ici_note_' + idx + '_' + qIdx;

    var noteVal = localStorage.getItem(noteKey) || '';

    text += 'Pregunta ' + (qIdx + 1) + ': ' + questionText + '\n';

    text += 'Respuesta: ' + (noteVal.trim() !== '' ? noteVal : '(Sin respuesta escrita)') + '\n';

    text += '--------------------------------------------------\n\n';

    notesCount++;

  });

  if (notesCount === 0) {

    alert('No hay preguntas de reflexión en esta lección.');

    return;

  }

  var blob = new Blob([text], { type: 'text/plain;charset=utf-8' });

  var url = URL.createObjectURL(blob);

  var a = document.createElement('a');

  a.href = url;

  a.download = 'Mis_Notas_' + p.titulo.replace(/\s+/g, '_') + '.txt';

  document.body.appendChild(a);

  a.click();

  document.body.removeChild(a);

  URL.revokeObjectURL(url);

}

function getSpeakableText(idx) {

  var view = document.getElementById('pv' + idx);

  if (!view) return '';

  var parts = [];

  var n = view.querySelector('.hero-n'); if (n) parts.push(n.textContent);

  var h = view.querySelector('.hero-h'); if (h) parts.push(h.textContent);

  var d = view.querySelector('.hero-d'); if (d) parts.push(d.textContent);

  var body = view.querySelector('.pbody');

  if (body) {

    var clone = body.cloneNode(true);

    var toRemove = clone.querySelectorAll('.lesson-actions, .note-export-btn, .video-outer, .slabel, button, script, iframe, .notes-section, .notes-saved');

    toRemove.forEach(function(el) { el.remove(); });

    var noteBoxes = clone.querySelectorAll('.note-box');

    noteBoxes.forEach(function(el) { el.remove(); });

    parts.push(clone.textContent);

  }

  return parts.join('\n\n').replace(/\s+/g, ' ').trim();

}

var sentenceCounter = 0;

function wrapSentencesInElement(element) {
  if (element.classList && (
    element.classList.contains('note-box') || 
    element.classList.contains('notes-section') || 
    element.classList.contains('lesson-actions') || 
    element.classList.contains('video-outer') || 
    element.tagName === 'BUTTON' || 
    element.tagName === 'TEXTAREA' || 
    element.tagName === 'IFRAME' || 
    element.tagName === 'SCRIPT'
  )) {
    return;
  }
  
  var childNodes = Array.from(element.childNodes);
  childNodes.forEach(function(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      var text = node.nodeValue;
      if (text.trim().length === 0) return;
      
      var regex = /([^.!?¡¿]+[.!?¡¿]*)/g;
      var matches = text.match(regex);
      
      if (matches && matches.length > 0) {
        var fragment = document.createDocumentFragment();
        matches.forEach(function(match) {
          var cleanMatch = match.trim();
          if (cleanMatch.length === 0) {
            fragment.appendChild(document.createTextNode(match));
            return;
          }
          
          var span = document.createElement('span');
          span.className = 'audio-sentence-span';
          span.dataset.sentenceIdx = sentenceCounter++;
          span.textContent = match;
          fragment.appendChild(span);
        });
        element.replaceChild(fragment, node);
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      wrapSentencesInElement(node);
    }
  });
}

function startAudio(idx) {

  var p = PP[idx];

  // Wrap sentences for highlighting (Karaoke mode)
  var pView = document.getElementById('pv' + idx);
  if (pView) {
    var pBody = pView.querySelector('.pbody');
    if (pBody && !pBody.dataset.sentencesWrapped) {
      sentenceCounter = 0;
      wrapSentencesInElement(pBody);
      pBody.dataset.sentencesWrapped = "true";
    }
  }

  var text = getSpeakableText(idx);

  if (!text) return;

  var title = document.getElementById('audioPlayerTitle');

  if (title) title.textContent = 'Lección ' + p.id + ': ' + p.titulo;

  var player = document.getElementById('audioPlayer');

  if (player) {
    player.classList.add('active');
    player.classList.add('compact'); // start as compact Dynamic Island
    var icon = document.getElementById('apExpandIcon');
    if (icon) icon.style.transform = 'rotate(0deg)';
  }

  AudioPlayer.start(text);

}

function toggleAudioPlayPause() {

  if (AudioPlayer.isPlaying) {

    AudioPlayer.pause();

  } else {

    AudioPlayer.resume();

  }

}

var AudioPlayer = {

  sentences: [],

  currentIdx: 0,

  isPlaying: false,

  utterance: null,

  voice: null,

  rate: 1.0,

  initialized: false,

  

  init: function() {

    if (this.initialized) return;

    this.loadVoices();

    if (window.speechSynthesis.onvoiceschanged !== undefined) {

      window.speechSynthesis.onvoiceschanged = this.loadVoices.bind(this);

    }

    this.initialized = true;

  },

  

  loadVoices: function() {

    var voices = window.speechSynthesis.getVoices();

    var esVoices = voices.filter(function(v) {

      return v.lang.startsWith('es');

    });

    

    var isEdge = window.navigator.userAgent.includes("Edg");

    

    esVoices.sort(function(a, b) {

      // Si no es Microsoft Edge, despriorizar las voces Online de Microsoft (tienden a fallar en Chrome/Firefox)

      var aOnline = a.name.toLowerCase().includes('online');

      var bOnline = b.name.toLowerCase().includes('online');

      if (!isEdge) {

        if (aOnline && !bOnline) return 1;

        if (!aOnline && bOnline) return -1;

      }

      

      // Priorizar voces locales de español latino (México, Colombia, US, 419)

      var aLat = a.lang.includes('MX') || a.lang.includes('US') || a.lang.includes('CO') || a.lang.includes('419');

      var bLat = b.lang.includes('MX') || b.lang.includes('US') || b.lang.includes('CO') || b.lang.includes('419');

      if (aLat && !bLat) return -1;

      if (!aLat && bLat) return 1;

      

      var aGoogle = a.name.toLowerCase().includes('google') || a.name.toLowerCase().includes('natural');

      var bGoogle = b.name.toLowerCase().includes('google') || b.name.toLowerCase().includes('natural');

      if (aGoogle && !bGoogle) return -1;

      if (!aGoogle && bGoogle) return 1;

      

      return 0;

    });

    

    var select = document.getElementById('audioVoiceSelect');

    if (select) {

      select.innerHTML = esVoices.map(function(v) {

        return '<option value="' + v.name + '">' + v.name + ' (' + v.lang + ')</option>';

      }).join('');

      

      if (esVoices.length > 0 && !this.voice) {

        this.voice = esVoices[0];

        select.value = esVoices[0].name;

      }

    }

  },

  

  handleVoiceChange: function() {

    var select = document.getElementById('audioVoiceSelect');

    if (!select) return;

    var voices = window.speechSynthesis.getVoices();

    var selected = voices.find(function(v) { return v.name === select.value; });

    if (selected) {

      this.voice = selected;

      if (this.isPlaying) {

        this.pause();

        this.resume();

      }

    }

  },

  

  start: function(text) {

    this.init();

    

    // Limpiar referencias globales previas

    window._activeUtterances = [];

    

    // Descongelar síntesis antes de cancelar y vaciar manejadores

    if (this.utterance) {

      this.utterance.onend = null;

      this.utterance.onerror = null;

    }

    window.speechSynthesis.resume();

    window.speechSynthesis.cancel();

    

    this.sentences = text.split(/[.!?¡¿]\s+/).map(function(s) {

      return s.trim();

    }).filter(function(s) {

      return s.length > 0;

    });

    

    this.currentIdx = 0;

    this.isPlaying = true;

    this.playCurrent();

    this.updateUI();

  },

  

  playCurrent: function() {

    if (this.currentIdx >= this.sentences.length) {

      this.stop();

      return;

    }

    

    // Asegurar que la cola de reproducción no se duerma

    window.speechSynthesis.resume();

    

    var self = this;

    var sentence = this.sentences[this.currentIdx];

    

    this.utterance = new SpeechSynthesisUtterance(sentence);

    if (this.voice) {

      this.utterance.voice = this.voice;

      this.utterance.lang = this.voice.lang;

    } else {

      this.utterance.lang = 'es-MX';

    }

    

    this.utterance.rate = this.rate;

    this.utterance.volume = 1.0;

    this.utterance.pitch = 1.0;

    

    // Evitar que el Garbage Collector recolecte el objeto en Chromium

    window._activeUtterances = window._activeUtterances || [];

    window._activeUtterances.push(this.utterance);

    

    var activeRef = this.utterance;

    

    this.utterance.onend = function() {

      var idx = window._activeUtterances.indexOf(activeRef);

      if (idx > -1) window._activeUtterances.splice(idx, 1);

      

      if (self.isPlaying) {

        self.currentIdx++;

        self.playCurrent();

        self.updateUI();

      }

    };

    

    this.utterance.onerror = function(e) {

      console.warn('TTS skipped sentence error:', e);

      var idx = window._activeUtterances.indexOf(activeRef);

      if (idx > -1) window._activeUtterances.splice(idx, 1);

      

      if (self.isPlaying) {

        self.currentIdx++;

        self.playCurrent();

        self.updateUI();

      }

    };

    

    // Retardo de 50ms para permitir que cancelaciones previas sean procesadas por el sistema operativo

    setTimeout(function() {

      if (self.isPlaying) {

        window.speechSynthesis.speak(activeRef);

      }

    }, 50);

  },

  

  pause: function() {

    this.isPlaying = false;

    if (this.utterance) {

      this.utterance.onend = null;

      this.utterance.onerror = null;

    }

    window._activeUtterances = [];

    window.speechSynthesis.cancel();

    this.updateUI();

  },

  

  resume: function() {

    this.isPlaying = true;

    this.playCurrent();

    this.updateUI();

  },

  

  stop: function() {

    this.isPlaying = false;

    if (this.utterance) {

      this.utterance.onend = null;

      this.utterance.onerror = null;

    }

    window._activeUtterances = [];

    window.speechSynthesis.cancel();

    this.currentIdx = 0;

    this.updateUI();

    

    var player = document.getElementById('audioPlayer');

    if (player) player.classList.remove('active');

  },

  

  setRate: function(rate) {

    this.rate = rate;

    if (this.isPlaying) {

      this.pause();

      this.resume();

    }

  },

  

updateUI: function() {

    var playBtn = document.getElementById('audioPlayPauseBtn');

    if (playBtn) {

      if (this.isPlaying) {

        playBtn.innerHTML = '⏸';

        playBtn.classList.remove('paused');

      } else {

        playBtn.innerHTML = '▶';

        playBtn.classList.add('paused');

      }

    }

    

    var progress = document.getElementById('audioProgress');

    if (progress && this.sentences.length > 0) {

      var pct = (this.currentIdx / this.sentences.length) * 100;

      progress.style.width = pct + '%';

    }

    

    var indexText = document.getElementById('audioIndexText');

    if (indexText) {

      indexText.textContent = (this.currentIdx + 1) + ' / ' + this.sentences.length;

    }

    // Actualizar Karaoke highlights en pantalla
    document.querySelectorAll('.audio-sentence-span').forEach(function(s) {
      s.classList.remove('active-audio-sentence');
    });

    if (this.isPlaying && this.sentences.length > 0) {
      var activeSpan = document.querySelector('#pv' + S.cur + ' .audio-sentence-span[data-sentence-idx="' + this.currentIdx + '"]');
      if (activeSpan) {
        activeSpan.classList.add('active-audio-sentence');
        activeSpan.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }

  }

};

window.addEventListener('beforeunload', function() { window.speechSynthesis.cancel(); });



function toggleFav(ref) {

  var favs = JSON.parse(localStorage.getItem('ici_favs') || '[]');

  var idx = favs.indexOf(ref);

  if (idx === -1) { favs.push(ref); } else { favs.splice(idx,1); }

  localStorage.setItem('ici_favs', JSON.stringify(favs));

  var btns = document.querySelectorAll('[data-fav="'+ref.replace(/"/g,'&quot;')+'"]');

  btns.forEach(function(b){ b.classList.toggle('active'); b.textContent = idx===-1?'★':'☆'; });

}

function isFav(ref) {

  return JSON.parse(localStorage.getItem('ici_favs') || '[]').indexOf(ref) !== -1;

}

function saveNotes(id) {

  var ta = document.getElementById('nt-'+id);

  if (!ta) return;

  localStorage.setItem('ici_notes_'+id, ta.value);

  var saved = document.getElementById('ns-'+id);

  if (saved) { saved.classList.add('show'); setTimeout(function(){ saved.classList.remove('show'); }, 2000); }

}

function loadNotes() {

  var tas = document.querySelectorAll('.notes-textarea');

  tas.forEach(function(ta){

    var id = ta.id.replace('nt-','');

    var val = localStorage.getItem('ici_notes_'+id);

    if (val) ta.value = val;

  });

}

function addFavBadges() {

  var refs = document.querySelectorAll('.sc-ref');

  refs.forEach(function(el){

    var ref = el.textContent.trim().split(' — ')[0];

    if (!ref || el.closest('.modal-overlay') || !el.hasAttribute('onclick')) return;

    if (el.nextSibling && el.nextSibling.classList && el.nextSibling.classList.contains('fav-badge')) return;

    var badge = document.createElement('span');

    badge.className = 'fav-badge' + (isFav(ref) ? ' active' : '');

    badge.textContent = isFav(ref) ? '★' : '☆';

    badge.title = 'Favorito';

    badge.setAttribute('data-fav', ref);

    badge.onclick = function(e){ e.stopPropagation(); toggleFav(ref); };

    el.parentNode.insertBefore(badge, el.nextSibling);

  });

}

var particleAnimId = null;

function startParticles(heroEl) {

  if (!heroEl || window.innerWidth < 769) return;

  if (particleAnimId) { cancelAnimationFrame(particleAnimId); particleAnimId = null; }

  var existing = heroEl.querySelector('.hero-particles');

  if (existing) existing.remove();

  var canvas = document.createElement('canvas');

  canvas.className = 'hero-particles';

  canvas.width = heroEl.offsetWidth;

  canvas.height = heroEl.offsetHeight;

  heroEl.insertBefore(canvas, heroEl.firstChild);

  var ctx = canvas.getContext('2d');

  var particles = [];

  var count = Math.min(60, Math.floor((canvas.width * canvas.height) / 12000));

  for (var i = 0; i < count; i++) {

    particles.push({

      x: Math.random() * canvas.width,

      y: Math.random() * canvas.height,

      vx: (Math.random() - 0.5) * 0.25,

      vy: -(Math.random() * 0.3 + 0.1),

      size: Math.random() * 2 + 1,

      alpha: Math.random() * 0.5 + 0.15,

      shape: Math.random() > 0.5 ? 'circle' : 'cross'

    });

  }

  function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(function(p){

      p.x += p.vx;

      p.y += p.vy;

      if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }

      if (p.x < -10) p.x = canvas.width + 10;

      if (p.x > canvas.width + 10) p.x = -10;

      ctx.globalAlpha = p.alpha;

      ctx.fillStyle = '#d4af37';

      ctx.strokeStyle = '#d4af37';

      ctx.lineWidth = 0.8;

      if (p.shape === 'circle') {

        ctx.beginPath();

        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

        ctx.fill();

      } else {

        ctx.beginPath();

        ctx.moveTo(p.x - p.size, p.y);

        ctx.lineTo(p.x + p.size, p.y);

        ctx.moveTo(p.x, p.y - p.size);

        ctx.lineTo(p.x, p.y + p.size);

        ctx.stroke();

      }

    });

    particleAnimId = requestAnimationFrame(draw);

  }

  draw();

}

function stopParticles() {

  if (particleAnimId) { cancelAnimationFrame(particleAnimId); particleAnimId = null; }

  var c = document.querySelector('.pview.active .hero-particles');

  if (c) c.remove();

}

function generateVerseCard(ref) {

  var text = verses[ref];

  if (!text) { alert('Versículo no disponible offline'); return; }

  var c = document.createElement('canvas');

  c.width = 600;

  c.height = 400;

  var ctx = c.getContext('2d');

  var grad = ctx.createLinearGradient(0, 0, c.width, c.height);

  grad.addColorStop(0, '#1a1a2e');

  grad.addColorStop(0.5, '#16213e');

  grad.addColorStop(1, '#0f3460');

  ctx.fillStyle = grad;

  ctx.fillRect(0, 0, c.width, c.height);

  ctx.fillStyle = 'rgba(212,175,55,0.06)';

  ctx.fillRect(0, 0, c.width, 3);

  ctx.fillRect(0, c.height - 3, c.width, 3);

  ctx.textAlign = 'center';

  ctx.fillStyle = '#d4af37';

  ctx.font = 'bold 24px Georgia, serif';

  ctx.fillText(ref, c.width / 2, 55);

  ctx.fillStyle = 'rgba(212,175,55,0.3)';

  ctx.font = '16px Georgia, serif';

  ctx.fillText('"', c.width / 2, 90);

  ctx.fillStyle = '#f0ead6';

  ctx.font = '18px Georgia, serif';

  var words = text.split(' ');

  var lines = [];

  var line = '';

  words.forEach(function(w){

    var test = line ? line + ' ' + w : w;

    if (ctx.measureText(test).width > 480) { lines.push(line); line = w; }

    else { line = test; }

  });

  if (line) lines.push(line);

  var sy = 120;

  lines.forEach(function(l){

    ctx.fillText(l, c.width / 2, sy);

    sy += 30;

  });

  ctx.fillStyle = 'rgba(212,175,55,0.3)';

  ctx.font = '16px Georgia, serif';

  ctx.fillText('"', c.width / 2, sy + 10);

  ctx.fillStyle = 'rgba(240,234,214,0.4)';

  ctx.font = '12px Georgia, serif';

  ctx.fillText('App Principios Básicos', c.width / 2, c.height - 30);

  c.toBlob(function(blob){

    var a = document.createElement('a');

    a.href = URL.createObjectURL(blob);

    a.download = ref.replace(/[:\s]+/g,'_') + '.png';

    a.click();

    URL.revokeObjectURL(a.href);

  });

}

function initSpotlight() {

  var inner = document.querySelector('.top-nav-inner');

  if (!inner || inner.querySelector('.top-nav-spotlight')) return;

  var sp = document.createElement('div');

  sp.className = 'top-nav-spotlight';

  inner.appendChild(sp);

  updateSpotlight();

}

function updateSpotlight() {

  var sp = document.querySelector('.top-nav-spotlight');

  var active = document.querySelector('.top-nav-btn.active');

  if (!sp || !active) { if (sp) sp.classList.remove('visible'); return; }

  var inner = document.querySelector('.top-nav-inner');

  var ir = inner.getBoundingClientRect();

  var ar = active.getBoundingClientRect();

  sp.style.left = (ar.left - ir.left) + 'px';

  sp.style.width = ar.width + 'px';

  sp.classList.add('visible');

}

function closeModal(e) {

if (e && e.target !== e.currentTarget) return;

document.getElementById('verseModal').classList.remove('active');

document.body.style.overflow = '';

}

document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeModal(); });

/* ── SCROLL REVEAL ────────────────────────────────────── */

function initReveal() {

var observer = new IntersectionObserver(function(entries) {

entries.forEach(function(entry) { if (entry.isIntersecting) entry.target.classList.add('visible'); });

}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(function(el) { observer.observe(el); });

}

/* ── STATE ───────────────────────────────────────────── */

function sGet(k,d){try{var x=localStorage.getItem(k);return x?JSON.parse(x):d;}catch(e){return d;}}

function sSet(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}}

var S={cur:-1,done:sGet('ici_done',[]),curVerseRef:''};

/* ── BUILD UI ───────────────────────────────────────────── */

function buildSB(){

document.getElementById('sbList').innerHTML=PP.map(function(p,i){

var done=S.done.indexOf(p.id)!==-1;

return '<div class="sb-item'+(done?' done':'')+(S.cur===i?' active':'')+'" id="si'+i+'" onclick="go('+i+')"><div class="sb-num">'+(done?'✓':p.id)+'</div><div class="sb-text"><div class="sb-title">'+p.titulo+'</div><div class="sb-desc"><span class="sb-desc-ico">'+ICONS[p.icono]+'</span> '+p.desc.substring(0,40)+'...</div></div></div>';

}).join('');

}

function buildW(){

document.getElementById('wGrid').innerHTML=PP.map(function(p,i){

return '<div class="w-card" onclick="go('+i+')"><div class="w-cnum">PRINCIPIO '+p.id+'</div><div class="w-ctitle"><span class="w-card-ico">'+ICONS[p.icono]+'</span> '+p.titulo+'</div></div>';

}).join('');

}

function buildTopNav(){

document.getElementById('topNavInner').innerHTML=PP.map(function(p,i){

return '<button class="top-nav-btn'+(S.cur===i?' active':'')+'" id="tn'+i+'" onclick="go('+i+')"><span class="top-nav-ico">'+ICONS[p.icono]+'</span> '+p.titulo+'</button>';

}).join('');

}

function buildPP(){

document.getElementById('pCont').innerHTML=PP.map(function(p,i){

var vid=p.vid?'<div class="video-outer"><div class="video-wrap"><iframe src="https://www.youtube-nocookie.com/embed/'+p.vid+'?rel=0" title="Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe></div><a class="vid-ext-btn" href="https://www.youtube.com/watch?v='+p.vid+'" target="_blank">▶ Ver en YouTube</a></div>':'<div class="video-outer"><div class="video-wrap"><div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:var(--muted);text-align:center;padding:20px;"><div><div style="font-size:42px;opacity:.3;margin-bottom:10px;">▶</div><div style="font-size:13px;">Video Tutorial próximamente</div></div></div></div></div>';

var done=S.done.indexOf(p.id)!==-1;

return '<div class="pview" id="pv'+i+'"><div class="hero"><div class="hero-glow" style="background:radial-gradient(ellipse at 72% 50%,'+p.color+'18 0%,transparent 65%);"></div><div class="hero-grad"></div><div class="hero-n">✦ Principio '+p.id+' de '+PP.length+'</div><span class="hero-ico">'+ICONS[p.icono]+'</span><h1 class="hero-h">'+p.titulo+'</h1><p class="hero-d">'+p.desc+'</p><div style="margin-top:20px;position:relative;z-index:2;"><button class="note-export-btn" onclick="startAudio('+i+')" style="background:var(--gold-subtle);border-color:var(--gold);color:var(--gold);margin-top:0;padding:8px 20px;border-radius:20px;font-size:13px;font-weight:600;display:inline-flex;align-items:center;gap:8px;cursor:pointer;transition:all var(--t2);"><span style="font-size:15px;">🔊</span> Escuchar Lección</button></div><div class="hero-line" style="background:'+p.color+';"></div></div><div class="pbody">'+p.html+'<div class="lesson-actions" style="margin-top:20px;margin-bottom:20px;text-align:right;"><button class="note-export-btn" onclick="exportNotes('+i+')" style="margin-top:0;"><span style="font-size:14px;margin-right:4px;">📥</span> Exportar mis notas</button></div><div class="slabel"><div class="slabel-ico">'+ICONS.video+'</div><div class="slabel-txt">Video Tutorial</div><div class="sdiv"></div></div>'+vid+'<div class="notes-section" id="notes-'+p.id+'"><h3>📝 Notas personales</h3><textarea class="notes-textarea" id="nt-'+p.id+'" placeholder="Escribe tus notas sobre este principio..."></textarea><button class="notes-btn" onclick="saveNotes('+p.id+')">💾 Guardar</button><span class="notes-saved" id="ns-'+p.id+'">✓ Guardado</span></div></div><div class="navfoot"><button class="nbtn" onclick="go('+(i-1)+')"'+(i===0?' disabled':'')+'>← Anterior</button><div class="ncenter"><button class="cbtn'+(done?' done':'')+'" id="cb'+i+'" onclick="markDone('+p.id+','+i+')">'+(done?'✓ Completado':'Marcar completado')+'</button></div><button class="nbtn primary" onclick="'+(i<PP.length-1?'go('+(i+1)+')':'go(-1)')+'">'+(i<PP.length-1?'Siguiente →':'Inicio')+'</button></div></div>';

}).join('');

}

/* ── NAVIGATION ───────────────────────────────────────── */

function go(idx){

  if (typeof AudioPlayer !== 'undefined') AudioPlayer.stop();

  var welcome = document.getElementById('welcome');

  var transitionClass = 'fade-in';

  if (S.cur !== -1 && idx !== -1) {

    transitionClass = idx > S.cur ? 'cube-right' : 'cube-left';

  }

  welcome.style.display='none';

  welcome.className = 'welcome';

  document.querySelectorAll('.pview').forEach(function(v){

    stopParticles();

    v.classList.remove('active', 'slide-in-right', 'slide-in-left', 'cube-right', 'cube-left', 'fade-in');

  });

  document.querySelectorAll('.sb-item').forEach(function(s){

    s.classList.remove('active');

  });

  if(idx===-1){

    welcome.style.display='flex';

    welcome.classList.add('fade-in');

    S.cur=-1;

    return;

  }

  var v=document.getElementById('pv'+idx);

  if(v){

    v.classList.add('active', transitionClass);

    startParticles(v.querySelector('.hero'));

    S.cur=idx;

    setTimeout(initReveal,100);

  }

  var si=document.getElementById('si'+idx);

  if(si)si.classList.add('active');

  updateSpotlight();

  applyCardHighlights();

  window.scrollTo(0,0);

  if(window.innerWidth<768){

    document.getElementById('sidebar').classList.remove('open');

    document.getElementById('overlay').classList.remove('active');

    document.querySelector('.menubtn').classList.remove('active');

  }

}

function toggleFocus(){document.body.classList.toggle("focus-mode");var btn=document.getElementById("focusBtn");if(btn)btn.textContent=document.body.classList.contains("focus-mode")?"📖":"📓";try{localStorage.setItem("ici_focus",document.body.classList.contains("focus-mode")?"on":"off");}catch(e){}}

function initTilt(){if(window.innerWidth<769)return;document.querySelectorAll(".w-card").forEach(function(card){card.addEventListener("mousemove",function(e){var r=card.getBoundingClientRect();var px=(e.clientX-r.left)/r.width-0.5;var py=(e.clientY-r.top)/r.height-0.5;card.style.transform="perspective(800px) rotateX("+(-py*5)+"deg) rotateY("+(px*5)+"deg) translateY(-4px)";});card.addEventListener("mouseleave",function(){card.style.transform="";});});}

function markDone(id,idx){

if(S.done.indexOf(id)===-1){S.done.push(id);sSet('ici_done',S.done);}

var cb=document.getElementById('cb'+idx);

if(cb){cb.textContent='✓ Completado';cb.classList.add('done');}

var si=document.getElementById('si'+idx);

if(si){si.classList.add('done');si.querySelector('.sb-num').textContent='✓';}

updProg();

}

function updProg(){

var d=S.done.length,t=PP.length,p=Math.round(d/t*100);

document.getElementById('sFill').style.width=p+'%';

document.getElementById('sPct').textContent=p+'%';

document.getElementById('hFill').style.width=p+'%';

document.getElementById('hLbl').textContent=d+' / '+t;

document.querySelectorAll('.top-nav-btn').forEach(function(b,i){

b.classList.toggle('active',i===S.cur);

});

}

/* ── MOBILE NAVIGATION FIX ───────────────────────────────── */

function toggleSB(){

var sidebar = document.getElementById('sidebar');

var overlay = document.getElementById('overlay');

var menubtn = document.querySelector('.menubtn');

sidebar.classList.toggle('open');

overlay.classList.toggle('active');

menubtn.classList.toggle('active');

if(window.innerWidth < 768){

document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';

}

}

/* ── THEME ───────────────────────────────────────────── */

function toggleTheme(){

  var isLight=document.body.classList.toggle('light');

  try{localStorage.setItem('ici_theme',isLight?'light':'dark');}catch(e){}

}

/* ── PWA ──────────────────────────────────────────────── */

var deferredPrompt=null,installBanner=document.getElementById('installBanner');

window.addEventListener('beforeinstallprompt',function(e){e.preventDefault();deferredPrompt=e;if(installBanner)setTimeout(function(){installBanner.classList.add('show');},3000);});

window.installApp=function(){if(deferredPrompt){deferredPrompt.prompt();deferredPrompt.userChoice.then(function(){deferredPrompt=null;closeInstallBanner();});}};

window.closeInstallBanner=function(){if(installBanner)installBanner.classList.remove('show');};

var offBar=document.getElementById('offlineBar');

function checkOnline(){if(offBar)offBar.classList.toggle('show',!navigator.onLine);}

window.addEventListener('online',checkOnline);window.addEventListener('offline',checkOnline);checkOnline();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('./sw.js')
      .then(function(reg) {
        console.log('Service Worker registrado con éxito:', reg.scope);
        // Fuerza la comprobación de actualizaciones de inmediato
        reg.update();

        reg.onupdatefound = function() {
          var installingWorker = reg.installing;
          if (installingWorker) {
            installingWorker.onstatechange = function() {
              if (installingWorker.state === 'installed') {
                if (navigator.serviceWorker.controller) {
                  console.log('Nueva actualización detectada en GitHub. Aplicando cambios...');
                }
              }
            };
          }
        };
      })
      .catch(function(err) {
        console.error('Error al registrar el Service Worker:', err);
      });
  });

  // Escucha cambios en el Service Worker y recarga la página al instante para activar los cambios
  var refreshing = false;
  navigator.serviceWorker.addEventListener('controllerchange', function() {
    if (!refreshing) {
      refreshing = true;
      window.location.reload();
    }
  });
}

/* ── INIT ───────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded',function(){

buildSB();buildW();buildPP();updProg();

for(var i=0; i<PP.length; i++){ initNotes(i); }

buildFavs();buildHighlights();loadNotes();addFavBadges();applyCardHighlights();initSpotlight();if(typeof AudioPlayer!=='undefined')AudioPlayer.init();

var saved;try{saved=localStorage.getItem('ici_theme');}catch(e){}if(saved==='light'){document.body.classList.add('light');}

document.getElementById('overlay').classList.remove('active');

document.querySelector('.menubtn').classList.remove('active');

setTimeout(function(){buildTopNav();initTilt();},100);

});

window.addEventListener('resize', function(){

if(window.innerWidth >= 768){

document.getElementById('sidebar').classList.remove('open');

document.getElementById('overlay').classList.remove('active');

document.querySelector('.menubtn').classList.remove('active');

document.body.style.overflow = '';

}

});

/* ── DATA ───────────────────────────────────────────────── */

var PP = [

{id:1,titulo:'Buscando a Dios',icono:'search',color:'#C9A96E',vid:'pfqrbbY-hYc',desc:'Descubriendo lo que significa buscar una relación con Dios con todo nuestro corazón.',html:`<div class="purpose"><div class="purpose-lbl">✦ Propósito</div><p class="purpose-txt">Determinar lo que significa buscar una relación con Dios con todo nuestro corazón.<br><br><strong style="font-family:'Outfit',sans-serif;font-size:14px;color:#E8C98A;">Pregunta introductoria:</strong> ¿Qué buscas en la vida? ¿Qué estás buscando con todo tu corazón?</p></div>

<div class="slabel"><div class="slabel-ico">${ICONS.book}</div><div class="slabel-txt">Escrituras y Análisis</div><div class="sdiv"></div></div>

<div class="sc-list">

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Salmo 119:1-2')">Salmo 119:1-2</div></div><div class="sc-body"><div class="sc-qm">"</div><p class="sc-verse">"1 Dichosos los que son intachables en su conducta, los que viven conforme a la ley del Señor. 2 Dichosos los que cumplen sus estatutos y lo buscan de todo corazón."</p><ul class="sc-pts"><li>"Dichoso" es un término que no usamos a menudo. ¿Sabes lo que significa? (¡Estar muy feliz!)</li><li>¿Qué significa ser intachable? (Ser irreprochable y hacer lo que es correcto.)</li><li class="q">En una escala del 1 (sin esfuerzo) al 10 (con todo tu corazón), ¿cómo describirías tus esfuerzos para buscar a Dios?</li><li>Para buscar a Dios, debes buscar Su Palabra (la Biblia) con todo tu corazón.</li><li>¿Cómo buscamos a Dios? (Guardando Sus estatutos.)</li><li>Cuando buscas a Dios con todo tu corazón, ¡el resultado es la felicidad!</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Mateo 6:25-34')">Mateo 6:25-34</div></div><div class="sc-body"><ul class="sc-pts"><li>Muchas personas no buscan a Dios porque no creen que Él tenga el poder de cambiar sus vidas.</li><li class="q">¿Cuáles son algunas áreas en tu vida por las que sientes la tentación de preocuparte?</li><li class="q">¿Qué significa "buscar primero Su reino y Su justicia"?</li><li class="q">¿Qué promete Dios si lo haces?</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Hechos 17:24-28')">Hechos 17:24-28</div></div><div class="sc-body"><ul class="sc-pts"><li class="q">¿Qué está haciendo Dios para desarrollar una relación con la gente?</li><li>¿Por qué Dios se toma tantas molestias? Para que la gente pueda buscarlo y tener una relación genuina con Él.</li><li class="q">¿Quieres una relación más profunda con Dios? Si no, ¿por qué?</li><li>Conocer a un cristiano no es una coincidencia. Dios tiene un gran plan para tu vida.</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Juan 4:23-24')">Juan 4:23-24</div></div><div class="sc-body"><ul class="sc-pts"><li class="q">¿Qué hace un verdadero adorador de Dios?</li><li>Dios está buscando a aquellos que quieren adorarlo en espíritu y en verdad.</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Jeremías 29:11-13')">Jeremías 29:11-13</div></div><div class="sc-body"><ul class="sc-pts"><li>En este pasaje, Dios comparte Su visión para Su pueblo.</li><li>Dios quiere darnos una esperanza y un futuro, pero primero debemos acercarnos a Él.</li><li>La oración es cómo buscamos a Dios.</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Hechos 8:26-39')">Hechos 8:26-39 — El eunuco etíope</div></div><div class="sc-body"><ul class="sc-pts"><li>Un estudio de caso de alguien que busca a Dios.</li><li><strong style="color:#E8C98A;">Sacrificio:</strong> Viajó 1500 millas desde Etiopía a Jerusalén.</li><li><strong style="color:#E8C98A;">Humildad:</strong> Escuchó humildemente a alguien capaz de enseñarle.</li><li><strong style="color:#E8C98A;">Obediencia:</strong> Respondió inmediatamente.</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Mateo 7:7-8')">Mateo 7:7-8</div></div><div class="sc-body"><ul class="sc-pts"><li>Si buscas a Dios en oración, ¡lo encontrarás!</li></ul></div></div>

</div>

<div class="slabel"><div class="slabel-ico">${ICONS.target}</div><div class="slabel-txt">Desafío de la Semana</div><div class="sdiv"></div></div>

<div class="challenge reveal"><div class="challenge-h">${ICONS.zap} Desafío</div><p class="challenge-t">Ora y lee la Biblia diariamente. El libro de Juan es un excelente lugar para empezar.</p></div>`},

{id:2,titulo:'La Palabra de Dios',icono:'book',color:'#A07856',vid:'mAtWiUAb66Y',desc:'Examinando por qué la Biblia es de Dios y por qué debe ser el estándar para nuestras vidas.',html:`<div class="purpose"><div class="purpose-lbl">✦ Propósito</div><p class="purpose-txt">Ayudarte a decidir hacer de la Biblia el estándar para tu vida.<br><br><strong style="font-family:'Outfit',sans-serif;font-size:14px;color:#E8C98A;">Pregunta:</strong> ¿Crees que es la divina Palabra de Dios?</p></div>

<div class="facts-box reveal"><h4>✦ Hechos sobre la Biblia</h4><ul><li>40 autores de 66 libros diferentes.</li><li>400 profecías acerca de Jesús cumplidas.</li><li>Más de 40,000 copias antiguas.</li></ul></div>

<div class="slabel"><div class="slabel-ico">${ICONS.book}</div><div class="slabel-txt">Escrituras y Análisis</div><div class="sdiv"></div></div>

<div class="sc-list">

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('2 Timoteo 3:16-17')">2 Timoteo 3:16-17</div></div><div class="sc-body"><p class="sc-verse">"16 Toda la Escritura es inspirada por Dios y útil para enseñar, para reprender, para corregir y para instruir en la justicia, 17 a fin de que el siervo de Dios esté enteramente capacitado para toda buena obra."</p><ul class="sc-pts"><li class="q">¿Crees que toda la Escritura proviene de Dios?</li><li>La Biblia es un estándar, ¿estás listo para convertirla en el estándar para tu vida?</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Hebreos 4:12-13')">Hebreos 4:12-13</div></div><div class="sc-body"><p class="sc-verse">"12 Porque la palabra de Dios es viva y eficaz. Más cortante que cualquier espada de dos filos, penetra hasta dividir alma y espíritu, coyunturas y médulas, y discierne los pensamientos y las intenciones del corazón. 13 No hay nada creado que pueda esconderse de Dios; al contrario, todo está desnudo y expuesto ante los ojos de aquel a quien tenemos que rendir cuentas."</p><ul class="sc-pts"><li>La Palabra de Dios expone el corazón humano.</li><li class="q">¿Estás dispuesto a permitir que la Biblia corte tu corazón para que puedas ser sanado?</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('2 Pedro 1:19-21')">2 Pedro 1:19-21 — Interpretación</div></div><div class="sc-body"><ul class="sc-pts"><li><strong style="color:#E8C98A;">1. INTERPRETACIÓN:</strong> La Biblia está destinada a ser leída y aplicada, no a ser cambiada para que se ajuste a nuestras opiniones.</li><li><strong style="color:#E8C98A;">2. EMOCIONES — <span class="sc-ref" onclick="openModal('Juan 8:31-32')">Juan 8:31-32</span>:</strong> Las emociones individuales y la racionalización de la Biblia pueden alejarte de la verdad.</li><li class="q">¿Qué Escrituras te resultan difíciles de obedecer?</li><li><strong style="color:#E8C98A;">3. TRADICIONES — <span class="sc-ref" onclick="openModal('Marcos 7:1-13')">Marcos 7:1-13</span>:</strong> Debemos tomar la decisión de seguir la verdad de la Palabra de Dios por encima de la tradición religiosa o cultural.</li><li class="q">¿Conoces algún ejemplo de tradiciones religiosas que desobedecen la Palabra de Dios?</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('1 Timoteo 4:16')">1 Timoteo 4:16</div></div><div class="sc-body"><ul class="sc-pts"><li class="q">¿Qué es más importante, la vida o la doctrina? Ambas son igualmente importantes.</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Hechos 17:10-11')">Hechos 17:10-11</div></div><div class="sc-body"><ul class="sc-pts"><li>¿Quieres tener un carácter noble? Entonces, ¿qué necesitas hacer?</li><li>Examinar con diligencia las Escrituras todos los días.</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Santiago 1:22-25')">Santiago 1:22-25</div></div><div class="sc-body"><ul class="sc-pts"><li>Escuchar sin intentar cambiar conduce al autoengaño.</li><li>La Palabra de Dios es un espejo: revela nuestro carácter para que podamos cambiarlo.</li><li class="q">¿Estás dispuesto a fijarte atentamente en la Biblia para que puedas cambiar?</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Juan 12:48')">Juan 12:48</div></div><div class="sc-body"><ul class="sc-pts"><li>Jesús dice que Su Palabra nos juzgará.</li><li>La Biblia es el estándar de Dios, ¿será tu estándar?</li></ul></div></div>

</div>

<div class="slabel"><div class="slabel-ico">${ICONS.target}</div><div class="slabel-txt">Desafío de la Semana</div><div class="sdiv"></div></div>

<div class="challenge reveal"><div class="challenge-h">${ICONS.zap} Desafío</div><p class="challenge-t">¡Examina con diligencia las Escrituras todos los días para que puedas hacer de la Palabra de Dios tu estándar para la vida!</p></div>`},

{id:3,titulo:'Discipulado',icono:'users',color:'#7A9E87',vid:'r0hQ7UJprfo',desc:'Definiendo bíblicamente lo que es un verdadero cristiano.',html:`<div class="purpose"><div class="purpose-lbl">✦ Propósito</div><p class="purpose-txt">Entender lo que significa ser un discípulo de Jesús.<br><br><strong style="font-family:'Outfit',sans-serif;font-size:14px;color:#E8C98A;">Pregunta:</strong> ¿Qué piensas que es un discípulo? Un estudiante y un seguidor.</p></div>

<div class="slabel"><div class="slabel-ico">${ICONS.book}</div><div class="slabel-txt">Escrituras y Análisis</div><div class="sdiv"></div></div>

<div class="sc-list">

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Mateo 28:18-20')">Mateo 28:18-20</div></div><div class="sc-body"><div class="sc-qm">"</div><p class="sc-verse">"18 Jesús se acercó a ellos y les dijo: “Se me ha dado toda autoridad en el cielo y en la tierra. 19 Por tanto, vayan y hagan discípulos de todas las naciones, bautizándolos en el nombre del Padre y del Hijo y del Espíritu Santo, 20 y enseñándoles a obedecer todo lo que les he mandado a ustedes. Y recuerden: yo estoy con ustedes siempre, hasta el fin del mundo”."</p><ul class="sc-pts"><li class="q">¿Cuál es el deseo de Jesús para cada persona? Convertirse en Su discípulo.</li><li class="q">¿Ha sido tu misión de vida hacer discípulos de todas las naciones?</li><li>Necesitas ser enseñado — ser hecho discípulo.</li><li>¡Los discípulos hacen discípulos, bautizan discípulos y enseñan a otros discípulos a obedecer!</li><li class="q">¿Es así como has estado viviendo?</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Hechos 11:25-26')">Hechos 11:25-26 — Discípulos = Cristianos</div></div><div class="sc-body"><ul class="sc-pts"><li>¿Qué término es más popular — discípulo o cristiano? Jesús nunca usó el término "cristiano" para definir a Sus seguidores.</li><li><strong style="color:#E8C98A;">Discípulos de Jesús = Cristianos = Salvos.</strong></li><li>La palabra "cristiano" solo aparece tres veces en el Nuevo Testamento.</li><li>La palabra "discípulo" aparece más de 270 veces en el Nuevo Testamento.</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Marcos 1:14-18')">Marcos 1:14-18</div></div><div class="sc-body"><ul class="sc-pts"><li>Este es el llamado de los primeros discípulos.</li><li>¡Los discípulos responden inmediatamente cuando son llamados!</li><li>El llamado de un discípulo fue sacrificial — dejaron caer sus "redes."</li><li class="q">¿Es así como has estado viviendo?</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Lucas 9:23-26')">Lucas 9:23-26</div></div><div class="sc-body"><ul class="sc-pts"><li>El llamado para todas las personas es poner la voluntad de Dios por encima de la suya.</li><li>Un discípulo "se niega a sí mismo" y toma su cruz cada día.</li><li class="q">¿Es así como has estado viviendo?</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Lucas 14:25-33')">Lucas 14:25-33</div></div><div class="sc-body"><ul class="sc-pts"><li>No podemos servir a dos señores — Dios debe ser claramente el primero.</li><li>¿Puedes pagar el costo para ser un discípulo?</li><li class="q">¿Es así como has estado viviendo?</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Lucas 11:1-4')">Lucas 11:1-4</div></div><div class="sc-body"><ul class="sc-pts"><li>Jesús da a Sus discípulos un modelo para la oración.</li><li>Debemos tener una relación personal diaria con Dios.</li><li class="q">¿Es así como has estado viviendo?</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Mateo 22:34-40')">Mateo 22:34-40</div></div><div class="sc-body"><ul class="sc-pts"><li>¿Qué espera Dios cuando se trata de amarlo?</li><li>Somos llamados a amar a Dios y a amar a nuestro prójimo.</li><li>El amor es la base de la Biblia. ¿Deseas amar a Dios de esta manera?</li></ul></div></div>

</div>

<div class="facts-box reveal" style="margin-top:24px;"><h4>✦ El poder multiplicador del discipulado</h4><ul><li><strong>Año 1:</strong> 1 ministro → 1 discípulo (2 personas)</li><li><strong>Año 2:</strong> 730 ministros → 4 discípulos</li><li><strong>Año 3:</strong> 1,095 ministros → 8 discípulos</li><li><strong>Año 13:</strong> 4,745 ministros → 8,192 discípulos</li><li><strong>Año 33:</strong> 12,045 ministros → ¡más de 8 mil millones de discípulos!</li></ul></div>

<div class="sc-list" style="margin-top:20px;"><div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref">Preguntas Finales</div></div><div class="sc-body"><ul class="sc-pts"><li class="q">¿Te definiría Jesús como Su discípulo?</li><li class="q">Como resultado, ¿eres cristiano — según las Escrituras?</li><li class="q">¿Eres salvo hoy — según las Escrituras?</li></ul></div></div></div>

<div class="slabel"><div class="slabel-ico">${ICONS.target}</div><div class="slabel-txt">Desafío de la Semana</div><div class="sdiv"></div></div>

<div class="challenge reveal"><div class="challenge-h">${ICONS.zap} Desafío</div><p class="challenge-t">¡Comienza a compartir tu fe hoy! ¡Eres bienvenido a unirte a nosotros en nuestro servicio de adoración!</p></div>`},

{id:4,titulo:'La Venida del Reino',icono:'crown',color:'#8A7BAE',vid:'ZLppk7dIdjI',desc:'Comprendiendo qué es el reino de Dios y cuándo llegó.',html:`<div class="purpose"><div class="purpose-lbl">✦ Propósito</div><p class="purpose-txt">Descubrir el propósito del reino de Dios en la tierra.</p></div>

<div class="facts-box reveal"><h4>✦ Seis preguntas clave</h4><ul><li>¿Qué es el reino de Dios?</li><li>¿Cuándo vino el reino de Dios — si es que vino?</li><li>¿Cómo entra uno en el reino?</li><li>¿Encajan el Antiguo Testamento y el Nuevo Testamento?</li><li>¿Es importante si voy a la iglesia?</li><li>¿Es importante a qué iglesia voy?</li></ul></div>

<div class="slabel"><div class="slabel-ico">${ICONS.book}</div><div class="slabel-txt">Predicciones del Antiguo Testamento sobre el Reino</div><div class="sdiv"></div></div>

<div class="sc-list">

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Isaías 2:1-4')">Isaías 2:1-4 (750 A.C.)</div></div><div class="sc-body"><ul class="sc-pts"><li>En los últimos días, el "monte del templo del Señor" será establecido.</li><li>Todas las naciones irán a él.</li><li>La gente será instruida en Sus caminos.</li><li>La palabra del Señor saldrá de Jerusalén.</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Daniel 2:31-45')">Daniel 2:31-45 (550 A.C.)</div></div><div class="sc-body"><ul class="sc-pts"><li>Gran estatua — representa una línea de tiempo de eventos:</li><li><strong style="color:#E8C98A;">Cabeza de oro:</strong> Babilonios (605 A.C. a 539 A.C.)</li><li><strong style="color:#E8C98A;">Pecho y brazos de plata:</strong> Medo-Persas (539 A.C. a 331 A.C.)</li><li><strong style="color:#E8C98A;">Vientre y muslos de bronce:</strong> Griegos (331 A.C. a 63 A.C.)</li><li><strong style="color:#E8C98A;">Piernas de hierro y pies de barro:</strong> Romanos (63 A.C. a 476 D.C.)</li><li>Una roca golpea la estatua en los pies de hierro y barro — durante el último tiempo del dominio romano.</li><li class="q">¿Cuándo exactamente crees que vino el reino de Dios?</li></ul></div></div>

</div>

<div class="slabel"><div class="slabel-ico">${ICONS.book}</div><div class="slabel-txt">Predicciones del Nuevo Testamento sobre el Reino</div><div class="sdiv"></div></div>

<div class="sc-list">

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Mateo 3:1-2')">Mateo 3:1-2 (25 D.C.)</div></div><div class="sc-body"><ul class="sc-pts"><li>Juan el Bautista declara que el reino está cerca.</li><li>Jesús ya había nacido (Juan el Bautista era seis meses mayor).</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Mateo 4:17')">Mateo 4:17 (27 D.C.)</div></div><div class="sc-body"><ul class="sc-pts"><li>Jesús comienza su ministerio y declara que el reino está cerca.</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Mateo 16:13-19')">Mateo 16:13-19</div></div><div class="sc-body"><ul class="sc-pts"><li>Pedro recibe las llaves del reino de Dios.</li><li>"Pedro" en griego es petros, que significa "piedra pequeña."</li><li>"Roca" en griego es petra, que significa "gran roca fundamental."</li><li>¿A qué se refiere la "roca" en este pasaje? ¡Jesús!</li><li><strong style="color:#E8C98A;">¡La iglesia es el reino de Dios en la tierra! Reino = Iglesia.</strong></li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Marcos 9:1')">Marcos 9:1</div></div><div class="sc-body"><ul class="sc-pts"><li>Algunos no "sufrirán la muerte" — o morirán — antes de que venga el reino de Dios.</li><li>El reino vendrá "con poder."</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Juan 3:1-7')">Juan 3:1-7</div></div><div class="sc-body"><ul class="sc-pts"><li>Para entrar en el reino, debemos "nacer del agua y del Espíritu."</li><li>¿Qué significa "nacer de nuevo"?</li><li>¿Ha venido ya el reino?</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Lucas 23:50-51')">Lucas 23:50-51</div></div><div class="sc-body"><ul class="sc-pts"><li>Jesús ha muerto, pero el reino aún no había venido.</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Lucas 24:44-49')">Lucas 24:44-49</div></div><div class="sc-body"><ul class="sc-pts"><li>Jesús ha resucitado, pero el reino aún no había venido.</li><li>Aquí hay cuatro pistas sobre cómo entrar en el reino.</li></ul></div></div>

</div>

<div class="slabel"><div class="slabel-ico">${ICONS.book}</div><div class="slabel-txt">Cumplimiento</div><div class="sdiv"></div></div>

<div class="sc-list">

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Hechos 1:1-26')">Hechos 1:1-26</div></div><div class="sc-body"><ul class="sc-pts"><li>Durante 40 días después de Su resurrección, Jesús habló a Sus discípulos sobre el reino.</li><li>Las profecías comienzan a cumplirse en Hechos 1 y 2.</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Hechos 2:1-47')">Hechos 2:1-47</div></div><div class="sc-body"><ul class="sc-pts"><li>Pedro destaca tres pistas de Lucas 24:44-49:</li><li>Poder de lo alto (versículos 1-4)</li><li>Jerusalén (versículo 5)</li><li>Cada nación (versículo 5)</li><li>"Últimos días" (versículo 17)</li><li>¿Ha venido ya el reino?</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Hechos 2:22-24')">Hechos 2:22-24</div></div><div class="sc-body"><ul class="sc-pts"><li>Pedro predica las "llaves" esenciales del reino:</li><li>Jesús viene de Dios;</li><li>Nuestros pecados lo llevaron a la Cruz;</li><li>¡Él resucitó de entre los muertos!</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Hechos 2:36-41')">Hechos 2:36-41</div></div><div class="sc-body"><ul class="sc-pts"><li>Arrepentimiento y perdón de pecados (verso 38) — ¡la respuesta bíblica para entrar en el reino!</li><li>¡El reino de Dios ha venido! ¡Tres mil personas "nacieron de nuevo del agua y del Espíritu!"</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Hechos 2:42-47')">Hechos 2:42-47</div></div><div class="sc-body"><ul class="sc-pts"><li>Este es el modelo para la iglesia.</li><li>Como los discípulos del primer siglo, debemos estar dedicados a la Biblia, la oración, la confraternidad y la comunión.</li><li class="q">¿Es importante a qué iglesia vamos? ¡Sí!</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Mateo 6:33')">Mateo 6:33</div></div><div class="sc-body"><ul class="sc-pts"><li>Debemos buscar primero el reino.</li><li>¡Debemos estar dispuestos a sacrificarnos para poner la iglesia primero en nuestras vidas!</li></ul></div></div>

</div>

<div class="slabel"><div class="slabel-ico">${ICONS.target}</div><div class="slabel-txt">Desafío de la Semana</div><div class="sdiv"></div></div>

<div class="challenge reveal"><div class="challenge-h">${ICONS.zap} Desafío</div><p class="challenge-t">Busca primero el reino comprometiéndose con la confraternidad de los discípulos — ¡la iglesia!</p></div>`},

{id:5,titulo:'Pecado y Arrepentimiento',icono:'scale',color:'#A07060',vid:'V6ZsKYtx_D8',desc:'Examinando qué es el pecado, cómo daña a Dios y cómo desarrollar el dolor piadoso para arrepentirse por completo.',html:`<div class="purpose"><div class="purpose-lbl">✦ Propósito</div><p class="purpose-txt">Demostrar nuestro amor a Dios entendiendo por qué necesitamos odiar el pecado y arrepentirnos de él.</p></div>

<div class="slabel"><div class="slabel-ico">${ICONS.book}</div><div class="slabel-txt">El Pecado</div><div class="sdiv"></div></div>

<div class="sc-list">

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Isaías 59:1-2')">Isaías 59:1-2</div></div><div class="sc-body"><ul class="sc-pts"><li>Pecado es un término que proviene del tiro con arco y significa <strong style="color:#F0EAD6;">"errar el blanco"</strong>.</li><li>El pecado nos separa de Dios.</li><li class="q">¿Estás en la oscuridad o en la luz en este momento? ¿Cómo lo sabes?</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Romanos 3:23')">Romanos 3:23</div></div><div class="sc-body"><ul class="sc-pts"><li>Todos han pecado y están privados de la gloria de Dios.</li><li>¿Quiénes han pecado contra Dios? Todos, sin importar cuán "pequeño" pueda parecer un pecado.</li><li class="q">¿Qué persona está más lejos de Dios: una persona que peca un poco o mucho?</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Gálatas 5:19-21')">Gálatas 5:19-21</div></div><div class="sc-body"><ul class="sc-pts"><li>Pecado significa "errar el blanco". Los pecados de la naturaleza pecaminosa son obvios.</li><li class="q">¿De cuáles de estos pecados necesitas arrepentirte hoy?</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('2 Timoteo 3:1-5')">2 Timoteo 3:1-5</div></div><div class="sc-body"><ul class="sc-pts"><li>Estos son pecados del corazón. Algunos pecados son descarados; others son más engañosos.</li><li class="q">¿De cuáles de estos pecados necesitas arrepentirte?</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Santiago 4:17')">Santiago 4:17</div></div><div class="sc-body"><ul class="sc-pts"><li>Saber lo que es correcto y no hacerlo también es pecado: <strong style="color:#F0EAD6;">el pecado de omisión</strong>.</li><li class="q">¿Necesitas arrepentirte de esto?</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Santiago 5:16')">Santiago 5:16</div></div><div class="sc-body"><ul class="sc-pts"><li>Estamos llamados a confesar nuestros pecados unos a otros.</li><li>La oración es poderosa y efectiva.</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Romanos 6:23')">Romanos 6:23</div></div><div class="sc-body"><div class="sc-qm">"</div><p class="sc-verse">"23 Porque la paga del pecado es muerte, mas la dádiva de Dios es vida eterna en Cristo Jesús Señor nuestro."</p><ul class="sc-pts"><li>Cuando pecamos, ganamos la muerte eterna.</li><li>¿Qué quiere darte Dios? ¡El regalo de la vida eterna!</li></ul></div></div>

</div>

<div class="slabel"><div class="slabel-ico">${ICONS.contrast}</div><div class="slabel-txt">El Arrepentimiento</div><div class="sdiv"></div></div>

<div class="sc-list">

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('2 Corintios 7:8-11')">2 Corintios 7:8-11</div></div><div class="sc-body"><ul class="sc-pts"><li>No puedes arrepentirte sin tener un <strong style="color:#F0EAD6;">dolor piadoso</strong>.</li><li>La respuesta al pecado es el arrepentimiento. (Griego — "metanoia" — cambio de mente)</li><li>Un cambio de mente debe conducir a un cambio en las acciones.</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Lucas 13:1-5')">Lucas 13:1-5</div></div><div class="sc-body"><ul class="sc-pts"><li>A menos que una persona se arrepienta, corre peligro de condenación eterna.</li><li>¡Debemos arrepentirnos, o pereceremos!</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Colosenses 3:5-10')">Colosenses 3:5-10</div></div><div class="sc-body"><ul class="sc-pts"><li class="q">¿Estás listo para matar estos pecados de una vez por todas?</li><li>La ira de Dios se acerca, ¡así que libérate de la esclavitud del pecado!</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Mateo 5:27-30')">Mateo 5:27-30</div></div><div class="sc-body"><ul class="sc-pts"><li>Debemos ser radicales al eliminar las cosas que nos hacen pecar.</li><li>El objetivo es una <strong style="color:#F0EAD6;">transformación del corazón</strong>.</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Hechos 26:20')">Hechos 26:20</div></div><div class="sc-body"><ul class="sc-pts"><li>¡Demostramos nuestro arrepentimiento con nuestras obras!</li><li class="q">¿Cuál es tu plan para arrepentirte de los pecados en tu vida?</li></ul></div></div>

</div>

<div class="slabel"><div class="slabel-ico">${ICONS.target}</div><div class="slabel-txt">Desafío de la Semana</div><div class="sdiv"></div></div>

<div class="challenge reveal"><div class="challenge-h">${ICONS.zap} Desafío</div><p class="challenge-t">Ten un plan claro de arrepentimiento, que aborde tanto los pecados de comisión como los de omisión.</p></div>`},

{id:6,titulo:'Luz y Oscuridad',icono:'contrast',color:'#5B7A9A',vid:'y5a5tM9iBgY',desc:'Un estudio exhaustivo de lo que significa pasar de la oscuridad del pecado a la luz de la salvación.',html:`<div class="purpose"><div class="purpose-lbl">✦ Propósito</div><p class="purpose-txt">Entender cómo ser salvo.<br><br><strong style="font-family:'Outfit',sans-serif;font-size:14px;color:#E8C98A;">Preguntas:</strong> ¿Cuándo crees que fuiste salvo? ¿Cuándo recibiste el Espíritu Santo?</p></div>

<div class="facts-box reveal"><h4>✦ Oscuridad vs. Luz — <span class="sc-ref" onclick="openModal('1 Pedro 2:9-10')">1 Pedro 2:9-10</span></h4><ul><li><strong style="color:#888;">OSCURIDAD:</strong> No Pueblo de Dios · Sin Misericordia · Perdido</li><li><strong style="color:#C9A96E;">LUZ:</strong> Pueblo de Dios · Misericordia · Salvo · Cristiano · Discípulo</li><li>Cada persona está ya sea en la oscuridad o en la luz. <strong style="color:#F0EAD6;">No existe una zona intermedia.</strong></li></ul></div>

<div class="slabel"><div class="slabel-ico">${ICONS.book}</div><div class="slabel-txt">Escrituras y Análisis</div><div class="sdiv"></div></div>

<div class="sc-list">

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Juan 3:1-7')">Juan 3:1-7</div></div><div class="sc-body"><ul class="sc-pts"><li>Debemos nacer de nuevo del agua y del Espíritu.</li><li>Esta es una decisión personal como adulto.</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Hechos 2:22-24')">Hechos 2:22-24</div></div><div class="sc-body"><ul class="sc-pts"><li><strong>¿Qué mensaje debe creer uno para ser salvo?</strong></li><li>Que Jesús fue acreditado por Dios.</li><li>Que Jesús resucitó físicamente de entre los muertos.</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Hechos 2:37')">Hechos 2:37</div></div><div class="sc-body"><ul class="sc-pts"><li><strong>¿Qué significa sentirse "profundamente conmovido"?</strong></li><li>La gente reconoció su responsabilidad por la muerte de Jesús.</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Hechos 2:38-42')">Hechos 2:38-42</div></div><div class="sc-body"><ul class="sc-pts"><li><strong>Una vez que la gente creyó, ¿qué hicieron?</strong></li><li>Arrepentirse (volverse a Dios).</li><li>Ser bautizados (ser sumergidos en agua).</li><li>Sus pecados fueron perdonados. <strong>Este es el momento en que una persona es salva.</strong></li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Romanos 6:1-8')">Romanos 6:1-8</div></div><div class="sc-body"><ul class="sc-pts"><li>El bautismo es la participación en la muerte, sepultura y resurrección de Cristo.</li><li>Este es el momento en que somos liberados del pecado y unidos con Cristo.</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Colosenses 2:11-12')">Colosenses 2:11-12</div></div><div class="sc-body"><ul class="sc-pts"><li>¿Qué activa el poder de Dios en el bautismo? ¡Nuestra fe!</li><li>Somos salvos por fe en el momento del bautismo.</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Mateo 15:6-9')">Mateo 15:6-9 — Falsas doctrinas</div></div><div class="sc-body"><ul class="sc-pts"><li>Las falsas doctrinas a menudo surgen de la tradición religiosa.</li><li><strong style="color:#E8C98A;">Ejemplos:</strong> Bautismo de infantes, Orar a Jesús para que entre en tu corazón.</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('1 Pedro 3:18-22')">1 Pedro 3:18-22</div></div><div class="sc-body"><ul class="sc-pts"><li>¿Qué representa el agua en este pasaje? El diluvio de Noé.</li><li>El bautismo "ahora los salva" — confirma que el bautismo no es meramente simbólico.</li></ul></div></div>

<div class="sc-card reveal" style="border-color:rgba(201,169,110,0.35)"><div class="sc-refbar" style="background:rgba(201,169,110,0.12)"><div class="sc-ref"><span style="display:inline-flex;align-items:center;gap:6px;vertical-align:middle;">${ICONS.alert} Revisa tu Línea de Tiempo</span></div></div><div class="sc-body"><ul class="sc-pts"><li>¿Tu línea de tiempo espiritual se alinea con el proceso bíblico de salvación?</li><li>Si no, ¡ahora es el momento de arrepentirse y ser bautizado!</li></ul></div></div>

</div>

<div class="slabel"><div class="slabel-ico">${ICONS.target}</div><div class="slabel-txt">Desafío de la Semana</div><div class="sdiv"></div></div>

<div class="challenge reveal"><div class="challenge-h">${ICONS.zap} Desafío</div><p class="challenge-t">Responde con urgencia: ¡sé bautizado para el perdón de tus pecados!</p></div>`},

{id:7,titulo:'La Cruz',icono:'cross',color:'#8A5A5A',vid:'CkH7Rc42F98',desc:'Apreciando la muerte de Jesús en la Cruz y entendiendo por qué debemos odiar el pecado y amar la rectitud.',html:`<div class="purpose"><div class="purpose-lbl">✦ Propósito</div><p class="purpose-txt">Odiar el pecado y amar a Dios porque apreciamos el sacrificio de Jesús.</p></div>

<div class="slabel"><div class="slabel-ico">${ICONS.book}</div><div class="slabel-txt">La Pasión de Cristo — Parte Uno</div><div class="sdiv"></div></div>

<div class="sc-list">

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Mateo 26:31-68')">Mateo 26:31-68</div></div><div class="sc-body"><ul class="sc-pts"><li>Jesús predijo que todos sus discípulos lo abandonarían.</li><li class="q">¿Qué te haría dejar de seguir a Jesús?</li><li>Jesús no quería morir. Él eligió morir. Fue una lucha emocional.</li><li>Los discípulos de Jesús lo abandonaron.</li></ul></div></div>

</div>

<div class="slabel"><div class="slabel-ico">${ICONS.book}</div><div class="slabel-txt">Tres Respuestas a la Cruz</div><div class="sdiv"></div></div>

<div class="sc-list">

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Mateo 26:69-75')">Mateo 26:69-75 — Pedro</div></div><div class="sc-body"><ul class="sc-pts"><li>Pedro niega a Jesús, tal como Jesús lo había profetizado.</li><li>El pecado de la <strong style="color:#F0EAD6;">cobardía</strong>.</li><li>Estaba quebrantado "a nivel del corazón" e incluso lloró amargamente.</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Mateo 27:1-10')">Mateo 27:1-10 — Judas</div></div><div class="sc-body"><ul class="sc-pts"><li>Jesús es entregado a Pilato, el gobernador romano.</li><li>El pecado de la <strong style="color:#F0EAD6;">traición</strong>.</li><li>Judas cedió a su tristeza mundana y se quitó la vida.</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Mateo 27:11-26')">Mateo 27:11-26 — Pilato</div></div><div class="sc-body"><ul class="sc-pts"><li>El pecado de la <strong style="color:#F0EAD6;">indecisión (omisión)</strong>.</li><li>Todos somos Barrabás y merecemos ser crucificados por nuestros pecados.</li></ul></div></div>

</div>

<div class="slabel"><div class="slabel-ico">${ICONS.book}</div><div class="slabel-txt">La Pasión — Parte Dos</div><div class="sdiv"></div></div>

<div class="sc-list">

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Mateo 27:27-56')">Mateo 27:27-56</div></div><div class="sc-body"><ul class="sc-pts"><li>Jesús fue crucificado a las 9 AM y permaneció en la Cruz durante seis horas.</li><li>En ese momento, Jesús tomó sobre sí los pecados de todo el mundo.</li><li class="q">¿Crees que Dios abandonó a Jesús en ese momento?</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('2 Corintios 5:21')">2 Corintios 5:21</div></div><div class="sc-body"><ul class="sc-pts"><li>Jesús se hizo pecado en la Cruz por nosotros.</li><li>Su meta era que llegáramos a ser la justicia de Dios.</li></ul></div></div>

</div>

<div class="slabel"><div class="slabel-ico">${ICONS.book}</div><div class="slabel-txt">La Pasión — Parte Tres</div><div class="sdiv"></div></div>

<div class="sc-list">

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Mateo 27:62-66')">Mateo 27:62-66</div></div><div class="sc-body"><ul class="sc-pts"><li>Todos sabían exactamente dónde fue sepultado Jesús.</li><li>Soldados romanos aseguraron la tumba.</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Mateo 28:1-10')">Mateo 28:1-10</div></div><div class="sc-body"><ul class="sc-pts"><li><strong style="color:#C9A96E;font-size:18px;">¡Jesús ha RESUCITADO!</strong></li><li>Él se aparece a sus discípulos y los anima.</li></ul></div></div>

</div>

<div class="slabel"><div class="slabel-ico">${ICONS.book}</div><div class="slabel-txt">Nuestra Responsabilidad</div><div class="sdiv"></div></div>

<div class="sc-list">

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Isaías 53:4-6')">Isaías 53:4-6</div></div><div class="sc-body"><ul class="sc-pts"><li>Sustituye tu name en este pasaje.</li><li class="q">¿De verdad odias tu pecado por cómo lo hirió a Él?</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('1 Pedro 2:21-24')">1 Pedro 2:21-24</div></div><div class="sc-body"><ul class="sc-pts"><li>Jesús sufrió por cada uno de nosotros individualmente.</li><li>Debemos morir al pecado y vivir para la justicia.</li><li class="q">¿Cuál es el pecado más difícil que necesitas rendir?</li></ul></div></div>

</div>

<div class="slabel"><div class="slabel-ico">${ICONS.target}</div><div class="slabel-txt">Desafío de la Semana</div><div class="sdiv"></div></div>

<div class="challenge reveal"><div class="challenge-h">${ICONS.zap} Desafío</div><p class="challenge-t">Muere al pecado y vive para la justicia por gratitud hacia la Cruz.</p></div>`},

{id:8,titulo:'La Iglesia',icono:'church',color:'#7A8A6E',vid:'GZfQziAruIQ',desc:'Un estudio informativo de la historia de la iglesia, examinando el desarrollo de varias denominaciones desde el primer siglo.',html:`<div class="purpose"><div class="purpose-lbl">✦ Propósito</div><p class="purpose-txt">Adquirir una profunda convicción del plan eterno de Dios para la iglesia.</p></div>

<div class="slabel"><div class="slabel-ico">${ICONS.book}</div><div class="slabel-txt">Escrituras y Análisis</div><div class="sdiv"></div></div>

<div class="sc-list">

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Colosenses 1:15-18')">Colosenses 1:15-18</div></div><div class="sc-body"><ul class="sc-pts"><li>La iglesia es el cuerpo de Cristo. Cristo es la cabeza del cuerpo.</li><li>No existe el concepto de cristianos en solitario.</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Efesios 2:19-22')">Efesios 2:19-22</div></div><div class="sc-body"><ul class="sc-pts"><li>Antes éramos extraños para Cristo, pero ahora somos miembros de su familia.</li><li>La iglesia es la familia de Dios.</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref">¿Qué sucede en el Bautismo?</div></div><div class="sc-body"><ul class="sc-pts"><li><strong><span class="sc-ref" onclick="openModal('1 Corintios 12:12-13')">1 Corintios 12:12-13</span></strong> — Todos somos bautizados en el cuerpo de Cristo.</li><li><strong><span class="sc-ref" onclick="openModal('Romanos 6:3-4')">Romanos 6:3-4</span></strong> — También somos bautizados en Cristo mismo.</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('1 Corintios 1:10-13')">1 Corintios 1:10-13</div></div><div class="sc-body"><ul class="sc-pts"><li>No debe haber divisiones dentro de la iglesia.</li><li>La palabra "denominación" significa "un grupo bajo un nombre". Esto es antibíblico.</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Efesios 4:4-6')">Efesios 4:4-6</div></div><div class="sc-body"><div class="sc-qm">"</div><p class="sc-verse">"4 Un cuerpo, y un Espíritu... 5 un Señor, una fe, un bautismo, 6 un Dios y Padre de todos."</p><ul class="sc-pts"><li>La Biblia enseña que solo hay un cuerpo de Cristo.</li><li>Dios ve una sola iglesia — todos los discípulos bautizados en todo el mundo.</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('1 Corintios 12:14-27')">1 Corintios 12:14-27</div></div><div class="sc-body"><ul class="sc-pts"><li>Necesitamos que el cuerpo de Cristo esté activo en nuestras lives.</li><li>Cada parte del cuerpo necesita a las demás.</li></ul></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref" onclick="openModal('Hebreos 10:23-25')">Hebreos 10:23-25</div></div><div class="sc-body"><ul class="sc-pts"><li>No debemos dejar de congregarnos.</li><li>La comunión nos ayuda a mantenernos firmes en nuestro compromiso.</li></ul></div></div>

</div>

<div class="facts-box reveal" style="margin-top:16px;"><h4>✦ Cinco Convicciones para Edificar la Iglesia</h4><ul><li>El sueño de evangelizar a todas las naciones en esta generación</li><li>El discipulado es un mandato de Dios — no es opcional</li><li>Un liderazgo central bajo un líder central</li><li>Una iglesia bíblica — no solo una iglesia del Nuevo Testamento</li><li>Hablar donde la Biblia guarda SILENCIO, y guarda silencio donde la Biblia habla</li></ul></div>

<div class="slabel"><div class="slabel-ico">${ICONS.target}</div><div class="slabel-txt">Desafío de la Semana</div><div class="sdiv"></div></div>

<div class="challenge reveal"><div class="challenge-h">${ICONS.zap} Desafío</div><p class="challenge-t">Comprométete a ser parte activa del cuerpo de Cristo.</p></div>`},

{id:9,titulo:'Definiciones de Pecado',icono:'scroll',color:'#8A7060',vid:'',desc:'Examinando las distintas definiciones bíblicas del pecado para comprenderlo en toda su profundidad.',html:`<div class="purpose"><div class="purpose-lbl">✦ Propósito</div><p class="purpose-txt">Examinar las diferentes definiciones bíblicas del pecado para comprender en toda su dimensión qué es el pecado.</p></div>

<div class="slabel"><div class="slabel-ico">${ICONS.book}</div><div class="slabel-txt"><span class="sc-ref" onclick="openModal('Gálatas 5:19-21')">Gálatas 5:19-21</span></div><div class="sdiv"></div></div>

<div class="def-grid reveal" style="background:var(--bg2);border:1px solid var(--border);border-radius:10px;padding:4px 24px 8px;">

<div class="def-item"><div class="def-term">Inmoralidad Sexual <span class="def-greek">(porneía)</span></div><div class="def-desc">Cometer un acto sexual o cualquier pecado sexual fuera del matrimonio.</div></div>

<div class="def-item"><div class="def-term">Impureza <span class="def-greek">(akatharsía)</span></div><div class="def-desc">Suciedad o inmundicia en un sentido natural o físico; inmundicia moral, lascivia.</div></div>

<div class="def-item"><div class="def-term">Libertinaje <span class="def-greek">(asélgeia)</span></div><div class="def-desc">Falta de autocontrol que involucra el comportamiento de uno (excesos; comida, sueño, etc.).</div></div>

<div class="def-item"><div class="def-term">Idolatría <span class="def-greek">(eidololatreía)</span></div><div class="def-desc">Adorar cualquier cosa que no sea Dios (carrera, escuela, placer, deportes).</div></div>

<div class="def-item"><div class="def-term">Hechicería <span class="def-greek">(pharmakeía)</span></div><div class="def-desc">El ocultismo, la brujería, las drogas ilícitas, el trance, los encantamientos mágicos con drogas.</div></div>

<div class="def-item"><div class="def-term">Odio <span class="def-greek">(échthra)</span></div><div class="def-desc">Ser hostil. Animosidad hacia los demás.</div></div>

<div class="def-item"><div class="def-term">Discordia <span class="def-greek">(éris)</span></div><div class="def-desc">Rivalidad o falta de armonía entre personas.</div></div>

<div class="def-item"><div class="def-term">Celos <span class="def-greek">(zelos)</span></div><div class="def-desc">Pena y deseo porque no tienes lo que otra persona tiene.</div></div>

<div class="def-item"><div class="def-term">Arrebatos de ira <span class="def-greek">(thumós)</span></div><div class="def-desc">Un estado de intenso disgusto, enfado, ira, furia, indignación.</div></div>

<div class="def-item"><div class="def-term">Ambición egoísta <span class="def-greek">(eritheía)</span></div><div class="def-desc">Conflicto y rivalidad por motivos egoístas.</div></div>

<div class="def-item"><div class="def-term">Disensión <span class="def-greek">(dichostasía)</span></div><div class="def-desc">Una facción separada; división entre personas.</div></div>

<div class="def-item"><div class="def-term">Facciones <span class="def-greek">(haíresis)</span></div><div class="def-desc">Crear una separación entre personas debido a una opinión diferente.</div></div>

<div class="def-item"><div class="def-term">Envidia <span class="def-greek">(phthónos)</span></div><div class="def-desc">Dolor y amargura que se siente al ver la excelencia o la felicidad de otro.</div></div>

<div class="def-item"><div class="def-term">Embriaguez <span class="def-greek">(méthe)</span></div><div class="def-desc">Ingesta excesiva de alcohol.</div></div>

<div class="def-item"><div class="def-term">Orgías <span class="def-greek">(komos)</span></div><div class="def-desc">Vivir sin moderación. Festejar.</div></div>

</div>

<div class="slabel"><div class="slabel-ico">${ICONS.book}</div><div class="slabel-txt"><span class="sc-ref" onclick="openModal('Marcos 7:20-22')">Marcos 7:20-22</span></div><div class="sdiv"></div></div>

<div class="def-grid reveal" style="background:var(--bg2);border:1px solid var(--border);border-radius:10px;padding:4px 24px 8px;">

<div class="def-item"><div class="def-term">Robo <span class="def-greek">(klopé)</span></div><div class="def-desc">El acto de robar.</div></div>

<div class="def-item"><div class="def-term">Homicidio <span class="def-greek">(phónos)</span></div><div class="def-desc">Matar a un ser humano.</div></div>

<div class="def-item"><div class="def-term">Adulterio <span class="def-greek">(moicheía)</span></div><div class="def-desc">Sexo en el que al menos una persona está casada.</div></div>

<div class="def-item"><div class="def-term">Engaño <span class="def-greek">(dólos)</span></div><div class="def-desc">Ocultación o distorsión de la verdad con el propósito de engañar a otros; fraude.</div></div>

<div class="def-item"><div class="def-term">Lascivia <span class="def-greek">(asélgeia)</span></div><div class="def-desc">Ausencia de moderación; obsceno o indecente.</div></div>

<div class="def-item"><div class="def-term">Arrogancia <span class="def-greek">(huperephanía)</span></div><div class="def-desc">Una exhibición ofensiva de la propia importancia.</div></div>

<div class="def-item"><div class="def-term">Necedad <span class="def-greek">(aphrosúnee)</span></div><div class="def-desc">Falta de prudencia o buen juicio; tontería; falta de sentido.</div></div>

</div>

<div class="slabel"><div class="slabel-ico">${ICONS.book}</div><div class="slabel-txt"><span class="sc-ref" onclick="openModal('Efesios 5:1-7')">Efesios 5:1-7</span></div><div class="sdiv"></div></div>

<div class="def-grid reveal" style="background:var(--bg2);border:1px solid var(--border);border-radius:10px;padding:4px 24px 8px;">

<div class="def-item"><div class="def-term">Obscenidad <span class="def-greek">(aischrótes)</span></div><div class="def-desc">Comportamiento social o moralmente inapropiado o indecente.</div></div>

<div class="def-item"><div class="def-term">Chistes groseros <span class="def-greek">(eutrapelía)</span></div><div class="def-desc">Chistes ofensivos o de mal gusto.</div></div>

</div>

<div class="slabel"><div class="slabel-ico">${ICONS.book}</div><div class="slabel-txt"><span class="sc-ref" onclick="openModal('Colosenses 3:5-10')">Colosenses 3:5-10</span></div><div class="sdiv"></div></div>

<div class="def-grid reveal" style="background:var(--bg2);border:1px solid var(--border);border-radius:10px;padding:4px 24px 8px;">

<div class="def-item"><div class="def-term">Avaricia <span class="def-greek">(pleonexía)</span></div><div class="def-desc">Deseo excesivo de lo que uno no tiene, especialmente riqueza o posesiones.</div></div>

<div class="def-item"><div class="def-term">Maldad <span class="def-greek">(kakía)</span></div><div class="def-desc">El deseo de infligir lesión, daño o sufrimiento a otro.</div></div>

<div class="def-item"><div class="def-term">Calumnia <span class="def-greek">(blasphemía)</span></div><div class="def-desc">Abuso verbal contra alguien. Herir la reputación de alguien.</div></div>

<div class="def-item"><div class="def-term">Lenguaje sucio <span class="def-greek">(aischrología)</span></div><div class="def-desc">Discurso que generalmente se considera de mal gusto o con palabrotas.</div></div>

<div class="def-item"><div class="def-term">Mentira <span class="def-greek">(pseúdomai)</span></div><div class="def-desc">Hablar falsamente o con engaño.</div></div>

</div>

<div class="slabel"><div class="slabel-ico">${ICONS.book}</div><div class="slabel-txt"><span class="sc-ref" onclick="openModal('1 Corintios 6:7-10')">1 Corintios 6:7-10</span></div><div class="sdiv"></div></div>

<div class="def-grid reveal" style="background:var(--bg2);border:1px solid var(--border);border-radius:10px;padding:4px 24px 8px;">

<div class="def-item"><div class="def-term">Hacer trampa <span class="def-greek">(adikéo)</span></div><div class="def-desc">Defraudar, estafar; quitarle a otros de manera deshonesta.</div></div>

<div class="def-item"><div class="def-term">Homosexualidad <span class="def-greek">(arsenokoítes)</span></div><div class="def-desc">Relación íntima o sexual con el mismo género.</div></div>

<div class="def-item"><div class="def-term">Robar <span class="def-greek">(kléptes)</span></div><div class="def-desc">Tomar algo que no te pertenece.</div></div>

<div class="def-item"><div class="def-term">Estafar <span class="def-greek">(hárpax)</span></div><div class="def-desc">Engañar a una persona o empresa para robarle dinero u otros activos; obtener algo mediante fraude o engaño.</div></div>

</div>

<div class="slabel"><div class="slabel-ico">${ICONS.book}</div><div class="slabel-txt"><span class="sc-ref" onclick="openModal('2 Timoteo 3:1-5')">2 Timoteo 3:1-5</span> — Pecados del corazón</div><div class="sdiv"></div></div>

<div class="def-grid reveal" style="background:var(--bg2);border:1px solid var(--border);border-radius:10px;padding:4px 24px 8px;">

<div class="def-item"><div class="def-term">Amantes de sí mismos <span class="def-greek">(phílautos)</span></div><div class="def-desc">Amor a uno mismo, egoísta.</div></div>

<div class="def-item"><div class="def-term">Amantes del dinero <span class="def-greek">(philárguros)</span></div><div class="def-desc">Aficionado al dinero, codicioso.</div></div>

<div class="def-item"><div class="def-term">Jactanciosos <span class="def-greek">(alázon)</span></div><div class="def-desc">Presumir.</div></div>

<div class="def-item"><div class="def-term">Orgullosos <span class="def-greek">(huperephanos)</span></div><div class="def-desc">Ver arrogancia arriba en Marcos 7:20-22. Misma palabra griega.</div></div>

<div class="def-item"><div class="def-term">Ofensivos <span class="def-greek">(blásphemos)</span></div><div class="def-desc">Lenguaje áspero o insultante; maltratar, especialmente físicamente.</div></div>

<div class="def-item"><div class="def-term">Desobedientes a los padres <span class="def-greek">(apeithés)</span></div><div class="def-desc">Falta de voluntad para seguir las instrucciones de tus padres.</div></div>

<div class="def-item"><div class="def-term">Ingratos <span class="def-greek">(acháristos)</span></div><div class="def-desc">Desagradecido. No apreciar. No reconocer o no demostrar gratitud.</div></div>

<div class="def-item"><div class="def-term">Impíos <span class="def-greek">(anósios)</span></div><div class="def-desc">Estar en oposición a Dios o a lo que es sagrado.</div></div>

<div class="def-item"><div class="def-term">Sin amor <span class="def-greek">(ástorgos)</span></div><div class="def-desc">De corazón duro; insensible; sin consideración por los demás.</div></div>

<div class="def-item"><div class="def-term">Implacables <span class="def-greek">(áspondos)</span></div><div class="def-desc">No estar dispuesto a mostrar misericordia; irreconciliable.</div></div>

<div class="def-item"><div class="def-term">Sin autocontrol <span class="def-greek">(akratés)</span></div><div class="def-desc">Incapaz de gobernar los propios deseos, con falta de moderación.</div></div>

<div class="def-item"><div class="def-term">Brutales <span class="def-greek">(anemeros)</span></div><div class="def-desc">Salvaje.</div></div>

<div class="def-item"><div class="def-term">No amantes de lo bueno <span class="def-greek">(aphilágathos)</span></div><div class="def-desc">Antipático, hostil. No mostrar compasión.</div></div>

<div class="def-item"><div class="def-term">Traicioneros <span class="def-greek">(prodótes)</span></div><div class="def-desc">Traidor.</div></div>

<div class="def-item"><div class="def-term">Temerarios <span class="def-greek">(propetés)</span></div><div class="def-desc">Imprudente, desconsiderado. Actuar antes de pensar o de buscar consejo y perspectiva.</div></div>

<div class="def-item"><div class="def-term">Engreídos <span class="def-greek">(tuphóo)</span></div><div class="def-desc">Hincharse o inflarse de orgullo. Inflado.</div></div>

<div class="def-item"><div class="def-term">Amantes del placer <span class="def-greek">(philedonos)</span></div><div class="def-desc">Amar el placer.</div></div>

</div>

<div class="facts-box reveal" style="margin-top:20px;"><h4>✦ Referencias</h4><ul><li>Las definiciones se derivaron de los siguientes diccionarios de palabras griegas: Spiros Zodhiates, <em>The Complete Word Study Dictionary: New Testament</em>.</li><li>William Arndt, Frederick W. Danker y Walter Bauer, <em>A Greek-English Lexicon of the New Testament</em>.</li></ul></div>

<div class="slabel"><div class="slabel-ico">${ICONS.target}</div><div class="slabel-txt">Desafío de la Semana</div><div class="sdiv"></div></div>

<div class="challenge reveal"><div class="challenge-h">${ICONS.zap} Desafío</div><p class="challenge-t">Examina tu corazón y arrepiéntete de todo pecado que el Espíritu Santo te muestre.</p></div>`},

{id:10,titulo:'Relato Médico de la Crucifixión',icono:'stethoscope',color:'#7A6060',vid:'',desc:'Un análisis médico del sufrimiento físico de Jesús en la Cruz para apreciar plenamente Su sacrificio.',html:`<div class="purpose"><div class="purpose-lbl">✦ Propósito</div><p class="purpose-txt">Comprender desde una perspectiva médica el increíble sufrimiento físico que Jesús experimentó en la Cruz.</p></div>

<div class="facts-box reveal"><h4>✦ Un médico analiza la crucifixión</h4><ul><li><strong>Por el Dr. C. Truman Davis</strong> — Publicado originalmente en <em>Arizona Medicine</em>, marzo de 1965.</li></ul></div>

<div class="slabel"><div class="slabel-ico">${ICONS.scroll}</div><div class="slabel-txt">Análisis Médico Completo</div><div class="sdiv"></div></div>

<div class="sc-card reveal"><div class="sc-refbar"><div class="sc-ref">Introducción y contexto histórico</div></div><div class="sc-body"><div class="article-body"><p>Finalmente se me ocurrió que, aunque soy médico, ni siquiera conocía la causa inmediata de la muerte de Cristo.</p><p>La forma más común de cruz usada en los días de nuestro Señor era la <strong>cruz Tau</strong> (forma de T). El hombre condenado era obligado a llevar el patibulum (travesaño), que pesaba alrededor de 110 libras.</p></div></div></div>

<div class="sc-card reveal" style="margin-top:16px;"><div class="sc-refbar"><div class="sc-ref">Getsemaní — El sudor de sangre (Hematidrosis)</div></div><div class="sc-body"><div class="article-body"><p>La pasión física de Cristo comenzó en Getsemaní. San Lucas, el médico, menciona el sudor de sangre.</p><p>Aunque es muy raro, el fenómeno de la <strong>hematidrosis</strong> está bien documentado médicamente. Bajo un gran estrés emocional, pequeños capilares en las glándulas sudoríparas pueden romperse, mezclando sangre con sudor.</p></div></div></div>

<div class="sc-card reveal" style="margin-top:16px;"><div class="sc-refbar"><div class="sc-ref">Los azotes — La flagelación romana</div></div><div class="sc-body"><div class="article-body"><p>El legionario romano avanza con el <strong>flagrum</strong>: un látigo corto con varias correas de cuero pesadas y dos pequeñas bolas de plomo en cada extremo.</p><p>Después, los soldados le colocan una corona de espinas en el cuero cabelludo — una de las áreas más vascularizadas del cuerpo — produciendo un sangrado copioso.</p></div></div></div>

<div class="sc-card reveal" style="margin-top:16px;"><div class="sc-refbar"><div class="sc-ref">La Crucifixión — El proceso físico</div></div><div class="sc-body"><div class="article-body"><p>Un clavo pesado de hierro forjado es clavado a través de la muñeca y profundamente en la madera.</p><p>A medida que se hunde lentamente, un dolor insoportable se dispara a lo largo de los dedos y sube por los brazos, ya que los clavos ejercen presión sobre los <strong>nervios medianos</strong>.</p></div></div></div>

<div class="sc-card reveal" style="margin-top:16px;"><div class="sc-refbar"><div class="sc-ref">La muerte — Causa médica (<span class="sc-ref" onclick="openModal('Juan 19:34')">Juan 19:34</span>)</div></div><div class="sc-body"><div class="article-body"><p>Un terrible dolor aplastante en lo profundo del pecho, a medida que el <strong>pericardio</strong> se llena lentamente de suero y comienza a comprimir el corazón.</p><p>El legionario clavó su lanza a través del quinto espacio intercostal hacia el corazón. <span class="sc-ref" onclick="openModal('Juan 19:34')">Juan 19:34</span>: <em>"34 Pero uno de los soldados le abrió el costado con una lanza, y al instante salió sangre y agua"</em> — evidencia post-mortem de que nuestro Señor no murió de asfixia, sino de <strong>insuficiencia cardíaca</strong>.</p></div></div></div>

<div class="slabel"><div class="slabel-ico">${ICONS.target}</div><div class="slabel-txt">Reflexión Final</div><div class="sdiv"></div></div>

<div class="challenge reveal"><div class="challenge-h">${ICONS.cross} Reflexión</div><p class="challenge-t">Lee la narración de la crucifixión en <span class="sc-ref" onclick="openModal('Juan 19')">Juan 19</span> esta semana. Medita en cada detalle y permite que la realidad del sacrificio de Cristo cambie tu corazón para siempre.</p></div>`}

];

/* ═══════════════════════════════════════════════════════ SWIPE GESTURE ═══════════════════════════════════════════════════════ */

var touchStartX=0,touchEndX=0,touchStartY=0,touchEndY=0,swipeThreshold=50;

document.addEventListener('touchstart',function(e){

touchStartX=e.changedTouches[0].screenX;

touchStartY=e.changedTouches[0].screenY;

},false);

document.addEventListener('touchend',function(e){

touchEndX=e.changedTouches[0].screenX;

touchEndY=e.changedTouches[0].screenY;

handleSwipe();

},false);

function handleSwipe(){

var diffX=touchEndX-touchStartX;

var diffY=touchEndY-touchStartY;

// Solo detectar swipe horizontal (no vertical scroll)

if(Math.abs(diffX)>Math.abs(diffY)&&Math.abs(diffX)>swipeThreshold){

if(diffX<0){

// Swipe izquierda → Siguiente

if(S.cur<PP.length-1){go(S.cur+1);}

}else{

// Swipe derecha → Anterior

if(S.cur>0){go(S.cur-1);}

}

}

}

// Mostrar pista de swipe la primera vez

setTimeout(function(){

if(!localStorage.getItem('swipe_hint_shown')){

var hint=document.createElement('div');

hint.className='swipe-hint';

hint.innerHTML='<span>←</span> Desliza para navegar <span>→</span>';

document.body.appendChild(hint);

setTimeout(function(){hint.classList.add('show');},500);

setTimeout(function(){hint.classList.remove('show');setTimeout(function(){hint.remove();},300);},4000);

localStorage.setItem('swipe_hint_shown','true');

}

},3000);

window.addEventListener('scroll', function(){

var winScroll = document.body.scrollTop || document.documentElement.scrollTop;

var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

var scrolled = (winScroll / height) * 100;

document.getElementById('readProgress').style.width = scrolled + '%';

});

/* ═══════════════════════════════════════════════════════ BUSCADOR PROFESIONAL ═══════════════════════════════════════════════════════ */

function escapeRegex(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }

// HELPER FUNCTIONS FOR FUZZY SEARCH
function normalizeText(str) {
  return str ? str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() : "";
}

function getLevenshteinDistance(s1, s2) {
  var m = s1.length;
  var n = s2.length;
  var d = [];
  for (var i = 0; i <= m; i++) d[i] = [i];
  for (var j = 0; j <= n; j++) d[0][j] = j;
  for (var j = 1; j <= n; j++) {
    for (var i = 1; i <= m; i++) {
      if (s1[i - 1] === s2[j - 1]) {
        d[i][j] = d[i - 1][j - 1];
      } else {
        d[i][j] = Math.min(
          d[i - 1][j] + 1, // deletion
          d[i][j - 1] + 1, // insertion
          d[i - 1][j - 1] + 1 // substitution
        );
      }
    }
  }
  return d[m][n];
}

function fuzzyMatches(qNorm, targetNorm) {
  if (targetNorm.indexOf(qNorm) !== -1) return true;
  
  var qWords = qNorm.split(/\s+/).filter(w => w.length >= 3);
  var tWords = targetNorm.split(/[^a-z0-9]+/);
  
  if (qWords.length === 0) return false;
  
  if (qWords.length === 1) {
    var qw = qWords[0];
    for (var i = 0; i < tWords.length; i++) {
      var tw = tWords[i];
      if (tw.length < 3) continue;
      var maxDist = qw.length > 5 ? 2 : 1;
      if (Math.abs(tw.length - qw.length) <= maxDist) {
        if (getLevenshteinDistance(qw, tw) <= maxDist) {
          return true;
        }
      }
    }
  } else {
    var matchCount = 0;
    for (var j = 0; j < qWords.length; j++) {
      var qw = qWords[j];
      var found = false;
      for (var i = 0; i < tWords.length; i++) {
        var tw = tWords[i];
        if (tw.indexOf(qw) !== -1) {
          found = true;
          break;
        }
        var maxDist = qw.length > 5 ? 2 : 1;
        if (Math.abs(tw.length - qw.length) <= maxDist && getLevenshteinDistance(qw, tw) <= maxDist) {
          found = true;
          break;
        }
      }
      if (found) matchCount++;
    }
    if (matchCount === qWords.length) return true;
  }
  return false;
}

function highlightTextFuzzy(text, query) {
  var qNorm = normalizeText(query);
  var qWords = qNorm.split(/\s+/).filter(function(w) { return w.length >= 3; });
  if (qWords.length === 0) return text;
  
  var words = text.split(/(\s+|[.,:;?!()\-"])/);
  return words.map(function(word) {
    var wNorm = normalizeText(word);
    if (!wNorm) return word;
    
    var matches = false;
    for (var i = 0; i < qWords.length; i++) {
      var qw = qWords[i];
      if (wNorm.indexOf(qw) !== -1) {
        matches = true;
        break;
      }
      var maxDist = qw.length > 5 ? 2 : 1;
      if (Math.abs(wNorm.length - qw.length) <= maxDist && getLevenshteinDistance(qw, wNorm) <= maxDist) {
        matches = true;
        break;
      }
    }
    
    if (matches) {
      return '<span class="search-result-highlight">' + word + '</span>';
    }
    return word;
  }).join('');
}

function toggleSearch() {

  var bar = document.getElementById('searchBar');

  bar.style.display = bar.style.display === 'none' ? 'block' : 'none';

  if (bar.style.display === 'block') {

    setTimeout(() => document.getElementById('searchInput').focus(), 100);

    document.getElementById('searchResults').innerHTML = '';

  }

}

function searchContent() {

  var query = document.getElementById('searchInput').value.trim();
  var qNorm = normalizeText(query);

  var results = document.getElementById('searchResults');

  if (qNorm.length < 3) {

    results.innerHTML = '<div class="no-results"><span style="display:inline-flex;color:var(--muted);">' + ICONS.search + '</span><p>Escribe al menos 3 caracteres para buscar</p></div>';

    return;

  }

  var allResults = [];

  var exactVerseFound = false;

  // 1️⃣ Buscar coincidencia de versículos (Fuzzy / Normalizado)

  for (var ref in verses) {
    var refNorm = normalizeText(ref);
    var textNorm = normalizeText(verses[ref]);

    if (refNorm.indexOf(qNorm) !== -1 || qNorm.indexOf(refNorm) !== -1) {

      exactVerseFound = true;

      allResults.push({

        type: '<span class="search-result-type-ico">' + ICONS.book + '</span> Versículo',

        title: ref,

        text: verses[ref].substring(0, 150) + '...',

        action: 'openModal(\'' + ref + '\')',

        priority: 1

      });

    } else if (textNorm.indexOf(qNorm) !== -1 || fuzzyMatches(qNorm, textNorm)) {
      allResults.push({
        type: '<span class="search-result-type-ico">' + ICONS.book + '</span> Versículo',
        title: ref,
        text: verses[ref].substring(0, 150) + '...',
        action: 'openModal(\'' + ref + '\')',
        priority: 2
      });
    }

  }

  // 2️⃣ Buscar en principios

  PP.forEach(function(p, i) {
    var tNorm = normalizeText(p.titulo);
    var dNorm = normalizeText(p.desc);
    var hNorm = normalizeText(p.html);

    if (tNorm.indexOf(qNorm) !== -1 || dNorm.indexOf(qNorm) !== -1 || fuzzyMatches(qNorm, tNorm) || fuzzyMatches(qNorm, dNorm)) {

      allResults.push({

        type: '✦ Principio ' + p.id,

        title: p.titulo,

        text: p.desc,

        action: 'go(' + i + ')',

        priority: 3

      });

    } else if (hNorm.indexOf(qNorm) !== -1) {

      allResults.push({

        type: '✦ Principio ' + p.id + ' (contenido)',

        title: p.titulo,

        text: 'Contiene: ' + query,

        action: 'go(' + i + ')',

        priority: 3

      });

    }

  });

  // Ordenar resultados (versículos primero)

  allResults.sort(function(a, b) {

    return a.priority - b.priority;

  });

  // Mostrar resultados

  if (allResults.length === 0) {

    results.innerHTML = '<div class="no-results"><span style="display:inline-flex;color:var(--muted);">' + ICONS.alert + '</span><p>No se encontraron resultados para "<strong>' + query + '</strong>"</p></div>';

  } else {

    results.innerHTML = allResults.map(function(r) {

      var highlightedText = highlightTextFuzzy(r.text, query);
      var highlightedTitle = highlightTextFuzzy(r.title, query);

      return '<div class="search-result-item" onclick="' + r.action + ';toggleSearch();"><div class="search-result-type">' + r.type + '</div><div class="search-result-title">' + highlightedTitle + '</div><div class="search-result-text">' + highlightedText + '</div></div>';

    }).join('');

  }

}

// Cerrar búsqueda con Escape

document.addEventListener('keydown', function(e) {

if (e.key === 'Escape') {

document.getElementById('searchBar').style.display = 'none';

}

});

// Desplazamiento horizontal con la rueda del ratón en la barra de navegación superior

var topNavEl = document.getElementById('topNav');

if (topNavEl) {

  topNavEl.addEventListener('wheel', function(e) {

    if (e.deltaY !== 0) {

      topNavEl.scrollLeft += e.deltaY;

      e.preventDefault();

    }

  }, { passive: false });

}

/* ═══════════════════════════════════════════════════════ CARD GENERATOR LOGIC ═══════════════════════════════════════════════════════ */

// Estado del generador

var cardState = {

  bg: 'obsidian', // obsidian, sunset, aurora, starry, forest, sunrise

  font: 'serif',  // serif, sans

  textLight: true,

  offset: 0,

  fontSize: 17

};

function toggleAudioExpansion() {
  var player = document.getElementById('audioPlayer');
  var icon = document.getElementById('apExpandIcon');
  if (player) {
    if (player.classList.contains('compact')) {
      player.classList.remove('compact');
      if (icon) icon.style.transform = 'rotate(180deg)';
    } else {
      player.classList.add('compact');
      if (icon) icon.style.transform = 'rotate(0deg)';
    }
  }
}

function adjustCardFontSize(val) {
  cardState.fontSize = parseInt(val);
  var previewText = document.getElementById('previewText');
  if (previewText) {
    previewText.style.fontSize = val + 'px';
  }
  var valEl = document.getElementById('valCardFontSize');
  if (valEl) valEl.textContent = val + 'px';
  var slider = document.getElementById('cardFontSizeSlider');
  if (slider) slider.value = val;
}

function adjustCardPos(val) {
  cardState.offset = parseInt(val);
  var previewText = document.getElementById('previewText');
  if (previewText) {
    previewText.style.transform = 'translateY(' + val + 'px)';
  }
  var valEl = document.getElementById('valCardPosOffset');
  if (valEl) valEl.textContent = val + 'px';
  var slider = document.getElementById('cardPosSlider');
  if (slider) slider.value = val;
}

function resetCardText() {
  adjustCardFontSize(17);
  adjustCardPos(0);
}

// Drag & drop logic for previewText
(function() {
  var isDragging = false;
  var startY = 0;
  var startOffset = 0;

  function initDrag() {
    var previewText = document.getElementById('previewText');
    if (!previewText) return;
    
    previewText.addEventListener('mousedown', function(e) {
      isDragging = true;
      startY = e.clientY;
      startOffset = cardState.offset;
      e.preventDefault();
    });

    document.addEventListener('mousemove', function(e) {
      if (!isDragging) return;
      var deltaY = e.clientY - startY;
      var newOffset = Math.max(-120, Math.min(120, startOffset + deltaY));
      adjustCardPos(newOffset);
    });

    document.addEventListener('mouseup', function() {
      isDragging = false;
    });

    previewText.addEventListener('touchstart', function(e) {
      isDragging = true;
      startY = e.touches[0].clientY;
      startOffset = cardState.offset;
      e.preventDefault();
    }, { passive: false });

    document.addEventListener('touchmove', function(e) {
      if (!isDragging) return;
      var deltaY = e.touches[0].clientY - startY;
      var newOffset = Math.max(-120, Math.min(120, startOffset + deltaY));
      adjustCardPos(newOffset);
    }, { passive: false });

    document.addEventListener('touchend', function() {
      isDragging = false;
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDrag);
  } else {
    initDrag();
  }
})();

// Función para copiar texto del versículo

function copyVerseText() {

  var ref = S.curVerseRef;

  if (!ref) return;

  var text = verses[ref];

  if (!text) return;

  var shareText = '✝️ *' + ref + '*\n\n"' + text + '"\n\nEstudia los Principios Básicos de la Biblia en:\nhttps://julio-73.github.io/App-Principios-Basicos-/';

  

  navigator.clipboard.writeText(shareText).then(function() {

    var btn = document.getElementById('copyTextBtn');

    var originalHTML = btn.innerHTML;

    btn.innerHTML = '✓ Copiado';

    btn.style.borderColor = 'var(--gold)';

    btn.style.color = 'var(--gold)';

    setTimeout(function() {

      btn.innerHTML = originalHTML;

      btn.style.borderColor = '';

      btn.style.color = '';

    }, 2000);

  }).catch(function() {

    alert('No se pudo copiar automáticamente.');

  });

}

// Función para alternar el generador

function toggleGenerator() {

  var gen = document.getElementById('cardGenerator');

  var btn = document.getElementById('toggleGenBtn');

  var ref = S.curVerseRef;

  if (!ref) return;

  var text = verses[ref];

  if (!text) return;

  if (gen.style.display === 'none') {

    gen.style.display = 'block';

    btn.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:6px;"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> Ocultar Diseñador';

    

    // Rellenar datos

    var previewTextEl = document.getElementById('previewText');

    previewTextEl.textContent = '"' + text + '"';

    document.getElementById('previewRef').textContent = ref;

    

    // Ajustar tamaño del texto de la vista previa según la longitud para evitar desbordes en el HTML

    var textLen = text.length;

    if (textLen > 400) {

      previewTextEl.style.fontSize = '10px';

      previewTextEl.style.lineHeight = '1.35';

    } else if (textLen > 250) {

      previewTextEl.style.fontSize = '12px';

      previewTextEl.style.lineHeight = '1.4';

    } else if (textLen > 150) {

      previewTextEl.style.fontSize = '14px';

      previewTextEl.style.lineHeight = '1.45';

    } else {

      previewTextEl.style.fontSize = ''; // Usa el valor CSS por defecto (17px)

      previewTextEl.style.lineHeight = '';

    }

    resetCardText();

    updateCardPreviewClasses();

  } else {

    gen.style.display = 'none';

    btn.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:6px;"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path><path d="M12 8V16"></path><path d="M8 12H16"></path></svg> Diseñar Imagen';

  }

}

function updateCardPreviewClasses() {

  var preview = document.getElementById('cardPreview');

  preview.className = 'card-preview style-' + cardState.bg + ' font-' + cardState.font + ' text-' + (cardState.textLight ? 'light' : 'dark');

}

// Cambiar fondo

function changeCardBackground(bgType) {

  cardState.bg = bgType;

  

  if (bgType === 'sunrise') {

    cardState.textLight = false;

    document.getElementById('textColorBtn').textContent = 'Oscuro';

  } else {

    cardState.textLight = true;

    document.getElementById('textColorBtn').textContent = 'Claro';

  }

  

  // Actualizar activo en miniaturas

  var btns = document.querySelectorAll('#bgSelector .bg-option');

  btns.forEach(function(btn) {

    btn.classList.remove('active');

    if (btn.getAttribute('onclick').indexOf(bgType) !== -1) {

      btn.classList.add('active');

    }

  });

  

  updateCardPreviewClasses();

}

// Alternar fuente

function toggleCardFont() {

  cardState.font = (cardState.font === 'serif') ? 'sans' : 'serif';

  document.getElementById('fontToggleBtn').textContent = (cardState.font === 'serif') ? 'Serif' : 'Sans-serif';

  updateCardPreviewClasses();

}

// Alternar color texto

function toggleCardTextColor() {

  cardState.textLight = !cardState.textLight;

  document.getElementById('textColorBtn').textContent = cardState.textLight ? 'Claro' : 'Oscuro';

  updateCardPreviewClasses();

}

// Dibujar en Canvas con alta resolución (1200 x 1200 px)

function drawCanvasCard(callback) {

  var ref = S.curVerseRef;

  var text = '"' + (verses[ref] || '') + '"';

  

  var canvas = document.createElement('canvas');

  canvas.width = 1200;

  canvas.height = 1200;

  var ctx = canvas.getContext('2d');

  

  // 1. Dibujar Fondos (Matemáticos y Vectoriales)

  if (cardState.bg === 'obsidian') {

    ctx.fillStyle = '#0D0D0F';

    ctx.fillRect(0, 0, 1200, 1200);

    

    var rad = ctx.createRadialGradient(600, 600, 100, 600, 600, 800);

    rad.addColorStop(0, '#1E1E24');

    rad.addColorStop(1, '#0D0D0F');

    ctx.fillStyle = rad;

    ctx.fillRect(0, 0, 1200, 1200);

    

    ctx.strokeStyle = '#D4AF37';

    ctx.lineWidth = 4;

    ctx.strokeRect(30, 30, 1140, 1140);

    

    ctx.strokeStyle = 'rgba(212, 175, 55, 0.3)';

    ctx.lineWidth = 1;

    ctx.strokeRect(40, 40, 1120, 1120);

    
    // DIBUJAR LÍNEAS DE DISEÑO DORADAS DE CRUCE (GRID)
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.08)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(600, 45);
    ctx.lineTo(600, 1155);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(45, 600);
    ctx.lineTo(1155, 600);
    ctx.stroke();

  } else if (cardState.bg === 'sunset') {

    var grad = ctx.createLinearGradient(0, 0, 1200, 1200);

    grad.addColorStop(0, '#4a0e4e');

    grad.addColorStop(0.5, '#b43a55');

    grad.addColorStop(1, '#f67062');

    ctx.fillStyle = grad;

    ctx.fillRect(0, 0, 1200, 1200);

    

    var solGrad = ctx.createRadialGradient(600, 750, 50, 600, 750, 350);

    solGrad.addColorStop(0, 'rgba(254, 180, 123, 0.45)');

    solGrad.addColorStop(1, 'rgba(254, 180, 123, 0)');

    ctx.fillStyle = solGrad;

    ctx.beginPath();

    ctx.arc(600, 750, 350, 0, Math.PI * 2);

    ctx.fill();

    

    drawMountainRange(ctx, [

      {x: 0, y: 950}, {x: 300, y: 800}, {x: 600, y: 880}, {x: 900, y: 760}, {x: 1200, y: 920}

    ], 'rgba(56, 13, 62, 0.4)');

    

    drawMountainRange(ctx, [

      {x: 0, y: 1050}, {x: 250, y: 920}, {x: 550, y: 980}, {x: 850, y: 850}, {x: 1200, y: 1000}

    ], 'rgba(36, 6, 41, 0.75)');

    

    drawMountainRange(ctx, [

      {x: 0, y: 1150}, {x: 400, y: 1040}, {x: 800, y: 1080}, {x: 1200, y: 1120}

    ], '#1d0222');

    

  } else if (cardState.bg === 'aurora') {

    var grad = ctx.createLinearGradient(0, 0, 1200, 1200);

    grad.addColorStop(0, '#001a1a');

    grad.addColorStop(0.6, '#004d40');

    grad.addColorStop(1, '#00bfa5');

    ctx.fillStyle = grad;

    ctx.fillRect(0, 0, 1200, 1200);

    

    ctx.fillStyle = 'rgba(0, 255, 150, 0.08)';

    ctx.beginPath();

    ctx.moveTo(0, 400);

    ctx.bezierCurveTo(300, 200, 900, 600, 1200, 300);

    ctx.lineTo(1200, 900);

    ctx.bezierCurveTo(900, 800, 300, 1000, 0, 900);

    ctx.closePath();

    ctx.fill();

    

    ctx.fillStyle = 'rgba(0, 180, 255, 0.06)';

    ctx.beginPath();

    ctx.moveTo(0, 300);

    ctx.bezierCurveTo(400, 500, 800, 100, 1200, 450);

    ctx.lineTo(1200, 1000);

    ctx.bezierCurveTo(800, 700, 400, 950, 0, 850);

    ctx.closePath();

    ctx.fill();

    

  } else if (cardState.bg === 'starry') {

    ctx.fillStyle = '#06060c';

    ctx.fillRect(0, 0, 1200, 1200);

    

    var rad = ctx.createRadialGradient(600, 600, 100, 600, 600, 800);

    rad.addColorStop(0, '#111728');

    rad.addColorStop(1, '#050508');

    ctx.fillStyle = rad;

    ctx.fillRect(0, 0, 1200, 1200);

    

    var neb = ctx.createRadialGradient(800, 400, 50, 800, 400, 400);

    neb.addColorStop(0, 'rgba(156, 39, 176, 0.12)');

    neb.addColorStop(1, 'rgba(0, 0, 0, 0)');

    ctx.fillStyle = neb;

    ctx.beginPath();

    ctx.arc(800, 400, 400, 0, Math.PI * 2);

    ctx.fill();

    

    ctx.fillStyle = '#ffffff';

    for (var i = 0; i < 80; i++) {

      var sx = (Math.sin(i * 927.53) * 0.5 + 0.5) * 1200;

      var sy = (Math.cos(i * 123.45) * 0.5 + 0.5) * 1200;

      var sr = (Math.sin(i * 456.78) * 0.5 + 0.5) * 2 + 0.5;

      var opacity = Math.sin(i * 321.09) * 0.4 + 0.6;

      ctx.fillStyle = 'rgba(255, 255, 255, ' + opacity + ')';

      ctx.beginPath();

      ctx.arc(sx, sy, sr, 0, Math.PI * 2);

      ctx.fill();

    }

    

  } else if (cardState.bg === 'forest') {

    var grad = ctx.createLinearGradient(0, 0, 0, 1200);

    grad.addColorStop(0, '#0f2027');

    grad.addColorStop(0.5, '#203a43');

    grad.addColorStop(1, '#2c5364');

    ctx.fillStyle = grad;

    ctx.fillRect(0, 0, 1200, 1200);

    

    ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';

    ctx.fillRect(0, 500, 1200, 400);

    

    drawPineTrees(ctx, 150, 950, 160, 'rgba(10, 24, 30, 0.4)');

    drawPineTrees(ctx, 450, 900, 180, 'rgba(10, 24, 30, 0.4)');

    drawPineTrees(ctx, 750, 930, 170, 'rgba(10, 24, 30, 0.4)');

    drawPineTrees(ctx, 1050, 910, 190, 'rgba(10, 24, 30, 0.4)');

    

    var mist = ctx.createLinearGradient(0, 800, 0, 1200);

    mist.addColorStop(0, 'rgba(44, 83, 100, 0)');

    mist.addColorStop(0.8, 'rgba(44, 83, 100, 0.25)');

    ctx.fillStyle = mist;

    ctx.fillRect(0, 800, 1200, 400);

    

    drawPineTrees(ctx, 300, 1020, 220, 'rgba(5, 12, 16, 0.85)');

    drawPineTrees(ctx, 800, 990, 240, 'rgba(5, 12, 16, 0.85)');

    

  } else if (cardState.bg === 'sunrise') {

    var grad = ctx.createLinearGradient(0, 0, 0, 1200);

    grad.addColorStop(0, '#f9d423');

    grad.addColorStop(1, '#ff4e50');

    ctx.fillStyle = grad;

    ctx.fillRect(0, 0, 1200, 1200);

    

    ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';

    ctx.beginPath();

    ctx.arc(200, 200, 150, 0, Math.PI * 2);

    ctx.arc(350, 230, 180, 0, Math.PI * 2);

    ctx.arc(900, 180, 140, 0, Math.PI * 2);

    ctx.arc(1050, 220, 160, 0, Math.PI * 2);

    ctx.fill();

  }

  

  var textColor = cardState.textLight ? '#F5F5F7' : '#1A1A1E';

  var goldColor = cardState.textLight ? '#D4AF37' : '#B8941F';

  var footerColor = cardState.textLight ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.5)';

  

  var fontName = (cardState.font === 'serif') ? 'Playfair Display' : 'Outfit';

  var fontWeight = (cardState.font === 'serif') ? '400' : '500';

  var maxTextWidth = 900;

  

  // AJUSTE DINÁMICO DE FUENTE BASADO EN TAMAÑO DE LA INTERFAZ
  var scaleFactor = 1200 / 380; // ~3.158
  var fontSize = Math.round(cardState.fontSize * scaleFactor);

  var lineHeight = Math.round(fontSize * 1.45);

  var maxTextHeight = 650; // Altura máxima permitida para el bloque de texto

  var wrappedLines = [];

  

  while (fontSize > 18) {

    ctx.font = fontWeight + ' ' + fontSize + 'px ' + fontName + ', sans-serif';

    wrappedLines = wrapText(ctx, text, maxTextWidth);

    var totalTextHeight = wrappedLines.length * lineHeight;

    if (totalTextHeight <= maxTextHeight) {

      break;

    }

    fontSize -= 2;

    lineHeight = Math.round(fontSize * 1.45); // Escalar interlineado de forma proporcional

  }

  

  // Cálculo del Centrado Vertical del Bloque Completo con Offset
  var crossHeight = 60;

  var refHeight = 40;

  var gap = 40;

  var blockHeight = crossHeight + gap + totalTextHeight + gap + refHeight;

  

  var canvasOffset = cardState.offset * scaleFactor;
  var blockStartY = ((1200 - blockHeight) / 2) + canvasOffset;

  

  // 1. Dibujar Cruz ✝

  ctx.fillStyle = goldColor;

  ctx.font = 'normal 56px Outfit, sans-serif';

  ctx.textAlign = 'center';

  ctx.textBaseline = 'middle';

  var crossY = blockStartY + (crossHeight / 2);

  ctx.fillText('✝', 600, crossY);

  

  // 2. Dibujar Texto del Versículo

  ctx.fillStyle = textColor;

  ctx.font = fontWeight + ' ' + fontSize + 'px ' + fontName + ', sans-serif';

  ctx.textAlign = 'center';

  ctx.textBaseline = 'middle';

  

  var startY = blockStartY + crossHeight + gap + (lineHeight / 2);

  for (var k = 0; k < wrappedLines.length; k++) {

    ctx.fillText(wrappedLines[k], 600, startY + (k * lineHeight));

  }

  

  // 3. Dibujar Referencia Bíblica

  ctx.fillStyle = goldColor;

  ctx.font = 'bold 36px Outfit, sans-serif';

  var refY = blockStartY + crossHeight + gap + totalTextHeight + gap + (refHeight / 2);

  ctx.fillText(ref, 600, refY);

  

  // 4. Dibujar Firma/Footer

  ctx.fillStyle = footerColor;

  ctx.font = 'bold 22px Outfit, sans-serif';

  ctx.fillText('PRINCIPIOS BÁSICOS DE LA BIBLIA', 600, 1100);

  
  // APLICAR FILTRO DE GRANO/RUIDO ANALÓGICO SUTIL
  try {
    var imgData = ctx.getImageData(0, 0, 1200, 1200);
    var data = imgData.data;
    for (var i = 0; i < data.length; i += 4) {
      var noise = (Math.random() - 0.5) * 12; // sutil
      data[i] = Math.min(255, Math.max(0, data[i] + noise));
      data[i+1] = Math.min(255, Math.max(0, data[i+1] + noise));
      data[i+2] = Math.min(255, Math.max(0, data[i+2] + noise));
    }
    ctx.putImageData(imgData, 0, 0);
  } catch (e) {
    console.warn("Filtro de textura omitido por seguridad de origen cruzado de Canvas:", e);
  }

  document.fonts.ready.then(function() {

    callback(canvas);

  });

}

function drawMountainRange(ctx, points, color) {

  ctx.fillStyle = color;

  ctx.beginPath();

  ctx.moveTo(points[0].x, 1200);

  ctx.lineTo(points[0].x, points[0].y);

  

  for (var i = 0; i < points.length - 1; i++) {

    var p0 = points[i];

    var p1 = points[i+1];

    var xc = (p0.x + p1.x) / 2;

    var yc = (p0.y + p1.y) / 2;

    ctx.quadraticCurveTo(p0.x, p0.y, xc, yc);

  }

  

  ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);

  ctx.lineTo(points[points.length - 1].x, 1200);

  ctx.closePath();

  ctx.fill();

}

function drawPineTrees(ctx, x, y, size, color) {

  ctx.fillStyle = color;

  ctx.beginPath();

  ctx.fillRect(x - (size * 0.08), y, size * 0.16, size * 0.25);

  ctx.moveTo(x, y - size * 0.95);

  ctx.lineTo(x + size * 0.35, y - size * 0.4);

  ctx.lineTo(x - size * 0.35, y - size * 0.4);

  ctx.closePath();

  ctx.fill();

  

  ctx.beginPath();

  ctx.moveTo(x, y - size * 0.7);

  ctx.lineTo(x + size * 0.45, y - size * 0.2);

  ctx.lineTo(x - size * 0.45, y - size * 0.2);

  ctx.closePath();

  ctx.fill();

  

  ctx.beginPath();

  ctx.moveTo(x, y - size * 0.45);

  ctx.lineTo(x + size * 0.55, y);

  ctx.lineTo(x - size * 0.55, y);

  ctx.closePath();

  ctx.fill();

}

function wrapText(ctx, text, maxWidth) {

  var words = text.split(' ');

  var lines = [];

  var currentLine = words[0];

  

  for (var i = 1; i < words.length; i++) {

    var word = words[i];

    var width = ctx.measureText(currentLine + ' ' + word).width;

    if (width < maxWidth) {

      currentLine += ' ' + word;

    } else {

      lines.push(currentLine);

      currentLine = word;

    }

  }

  lines.push(currentLine);

  return lines;

}

function generateAndShareCard() {

  drawCanvasCard(function(canvas) {

    canvas.toBlob(function(blob) {

      if (!blob) return;

      var file = new File([blob], S.curVerseRef.replace(/[\s:]/g, '_') + '.png', { type: 'image/png' });

      

      if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {

        navigator.share({

          files: [file],

          title: S.curVerseRef,

          text: 'Compartido desde la App de Principios Básicos de la Biblia'

        }).then(function() {

          console.log('Imagen compartida correctamente');

        }).catch(function(err) {

          console.log('Error al compartir archivo:', err);

        });

      } else {

        generateAndDownloadCard();

      }

    }, 'image/png');

  });

}

function triggerButtonConfetti(button) {
  var rect = button.getBoundingClientRect();
  var parent = button.parentElement;
  
  for (var i = 0; i < 20; i++) {
    var p = document.createElement('span');
    p.className = 'btn-particle';
    
    var size = Math.random() * 6 + 4;
    var x = rect.left + rect.width / 2 - size / 2;
    var y = rect.top + rect.height / 2 - size / 2;
    
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.left = x + 'px';
    p.style.top = y + 'px';
    
    var angle = Math.random() * Math.PI * 2;
    var velocity = Math.random() * 80 + 45;
    var tx = Math.cos(angle) * velocity;
    var ty = Math.sin(angle) * velocity;
    
    p.style.setProperty('--tx', tx + 'px');
    p.style.setProperty('--ty', ty + 'px');
    
    document.body.appendChild(p);
    
    (function(el) {
      setTimeout(function() {
        if (el.parentNode) el.parentNode.removeChild(el);
      }, 800);
    })(p);
  }
}

function generateAndDownloadCard() {
  var btn = document.querySelector('.gen-action-btn.download-img');
  if (!btn || btn.classList.contains('loading')) return;
  
  var originalHTML = btn.innerHTML;
  btn.classList.add('loading');
  btn.innerHTML = '<span class="btn-spinner"></span>Procesando...';
  
  setTimeout(function() {
    drawCanvasCard(function(canvas) {
      try {
        var url = canvas.toDataURL('image/png');
        var a = document.createElement('a');
        a.href = url;
        a.download = S.curVerseRef.replace(/[\s:]/g, '_') + '.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        
        btn.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="margin-right:6px;color:var(--gold);"><polyline points="20 6 9 17 4 12"></polyline></svg> ¡Descargada!';
        triggerButtonConfetti(btn);
      } catch (err) {
        console.error(err);
        btn.innerHTML = 'Error';
      } finally {
        setTimeout(function() {
          btn.classList.remove('loading');
          btn.innerHTML = originalHTML;
        }, 2000);
      }
    });
  }, 120);
}



