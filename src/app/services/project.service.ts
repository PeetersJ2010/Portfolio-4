import {Injectable} from '@angular/core';
import { AttachmentType, AttachmentTypes } from '../interfaces/attachment';
import {LanguageType, LanguageTypes, Project, ProjectType, ProjectTypes} from "../interfaces/project";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [];

  constructor() {
    let stageProject: Project = {
      id: "stage",
      visible: true,
      title: "Stage bij Phronesys",
      subTitle: "Herwerken van mobiele applicatie",

      content: {
        // image: "phronesysLogo.png",
        image: "",
        about:
        "Tussen 28 februari 2022 en 27 mei 2022 liep ik gedurende 13 weken stage bij Phronesys. Zij hebben een uitgebreide expertise binnen de domeinen kwaliteit, veiligheid, milieu, voedselveiligheid, informatiebeveiliging en energie. Deze expertise hebben ze gebruikt bij het maken van een applicatie, voor zowel web als mobiel, die bedrijven helpt bij het digitaal beheren van hun SHEQ certificaten en processen. Naast een uitgebreid software pakket, bieden ze ook SHEQ consulting aan. \n\n Sinds kort heeft Phronesys haar mobiele applicatie gemigreerd van Cordova naar Flutter. Omdat beide frameworks enorm verschillen, is de migratie van het ene naar het andere niet zo vanzelfsprekend. De eerste stap is natuurlijk om alle noodzakelijke functionaliteiten te voorzien; een basisversie van de app. Dit was ook het startpunt van mijn stageopdracht. De tweede stap, en mijn stageopdracht, is het visueel herwerken van de app om zo de gebruiksvriendelijkheid en aantrekkelijkheid op het niveau te brengen van de webapplicatie.  \n\n De mobiele app bevat momenteel 18 modules. Elke module dient voor het beheren van een bepaald onderwerp zoals WPI's, LMRA's, Toolboxen, ... De meeste van deze modules bevatten een overzicht, een detailpagina en een pagina voor het toevoegen."
        ,
        contribution: "Mijn oorspronkelijke opdracht was om alleen de overzichten te herwerken binnen de app, maar aangezien deze opdracht al na 3 weken af was, vroeg ik aan mijn stagementor om eventueel ook andere schermen te herwerken. Uiteindelijk heb ik alle 55 schermen van de app mogen herwerken. Naast het herwerken van schermen heb ik ook enkele handige functionaliteiten mogen toevoegen aan de app zoals de mogelijkheid om te zoeken en sorteren op de overzichten, laadschermen, errorpagina's, internationalisatie en favorieten toevoegen. Tot slot heb ik ook een aantal illustraties gemaakt die getoond worden op de errorpagina's.",
        images: ["Scherm3.jpg", "Scherm4.jpg","Scherm5.jpg", "Scherm2.jpg"],
        verdict: "Ik heb deze stageopdracht gekozen om wat meer over Flutter bij te leren in plaats van weeral kennis te maken met een nieuw front-end framework. Achteraf bekeken kan ik met vol vertrouwen zeggen dat dit een goede beslissing was. Ik heb veel bijgeleerd, niet alleen op vlak van Flutter, maar ook hoe een grotere applicatie wordt opgebouwd en onderhouden. \n\n Onderaan vindt u de documenten die ik in het kader van mijn stage heb gemaakt en die dieper ingaan op bepaalde aspecten hiervan.",
        attachments: [
          {
            name: "Plan van aanpak",
            url: "assets/download/pva-joppepeeters.pptx",
            type: AttachmentTypes.pdf
          },
          {
            name: "Realisatie document",
            url: "assets/download/realisatiedocument-joppepeeters.pdf",
            type: AttachmentTypes.pdf
          },
          {
            name: "Reflectie verslag",
            url: "",
            type: AttachmentTypes.pdf
          }
        ],
        languages: [
          LanguageTypes.phronesys,
          LanguageTypes.flutter,
          LanguageTypes.dart,
          LanguageTypes.figma,
        ]
      },

      year: "2021-2022",
      img: "stage.jpg",
      category: ProjectTypes.school
    }

    let shopProject: Project = {
      id: "shop",
      visible: true,
      title: "DSport Webshop",
      subTitle: "Angular Challenge: Sport Webshop",

      content: {
        about:
          "Tijdens mijn derde jaar in de professionele bacheloropleiding Application Development op Thomas More in Geel, kregen alle studenten de opdracht om in groep een webshop te maken in Angular, gekoppeld met een back-end naar keuze. Samen met mijn groep hadden we gekozen voor de combinatie van Angular en .NET." +
          "\n\n" +
          "Er werden een heleboel eisen opgesteld door dotNet lab (de opdrachtgever) en omdat we maar 3 weken de tijd hadden gekregen, moesten we alles op alles zetten om al deze eisen te realiseren. De eisen waren onder andere een overzicht van de producten, detail pagina's, winkelmandje, beheren van producten en nog veel meer. Het thema van de webshop was voor iedereen hetzelfde, namelijk een webshop voor sportvoeding en accessoires. Aangevuld met deze basiseisen, kwamen er nog een aantal nice-to-haves aan bod zoals pagination, superadmin rol, suggesties uit vorige aankopen, ..."
        ,
        contribution: "Samen met Jorne Marx, Albert Baffour Awuah, Jens Fill??e en Jules Debbaut, hebben we deze opdracht tot een mooi resultaat afgewerkt. We hebben alle basis eisen en nice-to-haves kunnen integreren in de webshop door elks een tandje bij te steken wanneer het nodig was. Zelf was ik verantwoordelijk voor de front-end en huisstijl van de webshop. Zo heb ik alle schermontwerpen gemaakt als prototype en daarna geprogrammeerd. Eveneens werden er een heleboel front-end functionaliteiten toegevoegd zoals de product suggesties, artikel beheer pagina, product overzicht, navigatie, ....",
        images: ["Scherm1.jpg","Scherm2.jpg","Scherm3.jpg","Scherm4.jpg","Scherm5.jpg"],
        verdict: "Met deze opdracht zijn we als eerst ge??indigd voor de Angular challenge. Natuurlijk zijn we allemaal heel trots op het teamwerk en de webshop zelf. Na deze opdracht kan ik toch wel zelfzeker zeggen dat ik thuis hoor in de front-end. Angular is een zeer tof framework om in te werken en zeker iets waarnaar ik in de toekomst zal uitkijken.",
        attachments: [],
        languages: [
          LanguageTypes.angular,
          LanguageTypes.ts,
          LanguageTypes.dotNet,
          LanguageTypes.csharp,
          LanguageTypes.html5,
          LanguageTypes.scss,
        ]
      },

      year: "2021-2022",
      img: "shop.jpg",
      category: ProjectTypes.school
    }

    let bosteoProject: Project = {
      id: "bosteo",
      visible: true,
      title: "Foxtrot-Osteopathy",
      subTitle: "Website voor een dierenosteopaat",

      content: {
        about:
        "Achter Foxtrot-Osteopathy zit een zelfstandige dierenosteopaat genaamd Barbara. Ze was nog niet zo lang aan het werk en zocht iemand om voor haar een mooie website te maken. Deze opdracht heb ik met open armen aangenomen en ik ben meteen aan de slag gegaan."
        + "\n\n" + "Ik ben begonnen met een aantal ontwerpen te maken voor Barbara zodat ik beter kon begrijpen waarnaar ze precies op zoek was. Ze wou namelijk een moderne en minimalistische website."
        + "\n" + "Ik heb ervoor gekozen om haar website in Angular te bouwen. Dit maakt het onderhoud en uitbreiden van de website zeer makkelijk voor mij als ontwikkelaar."
        ,
        contribution:
        "Van ontwerp tot realisatie heb ik alles voor dit project voorzien. Enkel het logo werd door iemand anders ontworpen, omdat dit buiten mijn expertises valt."
        ,
        images: ["Scherm1.jpg","Scherm2.jpg","Scherm3.jpg","Scherm4.jpg","Scherm5.jpg","Scherm6.jpg"],
        verdict: "Barbara is zeer tevreden met haar nieuwe website." + "\n"
        + "??????",
        attachments: [
          {
            name: "Website",
            url: "https://foxtrot-osteopathy.be/",
            type: AttachmentTypes.website
          }
        ],
        languages: [
          LanguageTypes.angular,
          LanguageTypes.ts,
          LanguageTypes.html5,
          LanguageTypes.scss,
        ]
      },

      year: "2022",
      img: "bosteo.jpg",
      category: ProjectTypes.school
    }

    let projectVierPuntNul: Project = {
      id: "vierPuntNul",
      visible: true,
      title: "Project 4.0",
      subTitle: "VanRoey PowerApps tracking systeem",
      content: {
        about:
          "Binnen alle keuzerichtingen van de IT-factory, krijgen alle derdejaarsstudenten een opdracht in samenwerking met een bedrijf. Samen met studenten uit andere keuzerichtingen, wordt iedereen in diverse groepen opgedeeld. Zo bestaat een groepje uit een 6 tal personen met telkens een persoon uit elke keuzerichting."
          + "\n\n" + "Elk groepje krijgt ook een andere opdrachtgever. Onze groep (Adnane Chentouf (CCS), Charlotte Overeem (APP), Hannes Bervoets (IOT), Miguel Haest (AI) en Robbe Meulemans (CCS)) mocht een opdracht uitvoeren voor VanRoey, namelijk de realisatie van een tracking systeem."
          + "\n\n" + "Dit tracking systeem zou klanten traceren binnen een ruimte waarin allerlei kiosken staan. Deze gegevens worden opgeslagen in een database en van hieruit worden een aantal interessante grafieken gecre??erd. Omdat VanRoey graag met microsoft producten werkt, zijn wij aan de slag gegaan met Power Apps en Power Automate voor de applicatie, Power BI voor de grafieken en Azure voor de security en hosting.",
          contribution: "Samen met Charlotte Overeem heb ik de applicatie in Power Apps gemaakt. Hierin kunnen allerlei zaken worden beheerd zoals evenementen, aanwezigheden, locaties, bezoekers, ...",
        images: [
          "Scherm1.jpg",
          "Scherm2.jpg",
          "Scherm3.jpg",
          "Scherm4.jpg",
          "Scherm5.jpg",
        ],
        verdict: "Hannes heeft zijn best gedaan, maar uiteindelijk waren er een paar probleempjes met de communicatie tussen de IOT en de database. Omdat onze kant (APP) wel volledig functioneerde, hebben we nog allemaal samen een mooi resultaat kunnen opleveren. Het was ook een zeer unieke kans om samen te werken met VanRoey en om aan de slag te gaan met Power Apps en Power Automate.",
        attachments: [
          {
            name: "Demo",
            url: "https://www.youtube.com/watch?v=9LS4RN-85lY",
            type: AttachmentTypes.youtube
          }
        ],
        languages: [
          LanguageTypes.powerapp,
          LanguageTypes.powerautomate,
          LanguageTypes.azure,
        ]
      },

      year: "2021-2022",
      img: "vierPuntNul.jpg",
      category: ProjectTypes.school
    }

    let niza: Project = {
      id: "niza",
      visible: false,
      title: "NiZa klussen",
      subTitle: "Website voor een klusjesman in Retie",
      content: {
        about:
          "",
        contribution: "",
        images: [""],
        verdict: "",
        attachments: [],
        languages: [
          LanguageTypes.angular,
          LanguageTypes.ts,
          LanguageTypes.dotNet,
          LanguageTypes.csharp
        ]
      },

      year: "2022",
      img: "niza.jpg",
      category: ProjectTypes.website
    }

    let todoProject: Project = {
      id: "todo",
      visible: true,
      title: "ToDo App",
      subTitle: "Project Angular: ToDo App",

      content: {
        about: "Tijdens mijn derde jaar in de professionele bacheloropleiding, Application Development op Thomas More in Geel, kregen alle studenten de opdracht om een ToDo applicatie te maken in Angular. De score hierop bepaalde de teams voor de Angular Challenge die hierna volgde. Hierdoor wist ik dat ik alles op alles moest zetten, zodat ik tijdens de Angular Challenge bij een performante groep zou zitten. Deze challenge is, naar mijn mening, de op 1 na meest belangrijke opdracht van de opleiding. Dankzij mijn goede score en de daaruitvolgende deelname aan het beste team, ben ik op de eerste plaats ge??indigd in de Angular Challenge.",
        contribution: "In de ToDo app krijgt de gebruiker links een lijst te zien waarop alle ToDo lijsten te zien zijn. In het midden opent een lijst met alle ToDo's wanneer er een ToDo lijst wordt geselecteerd. Tot slot krijgen we rechts een scherm te zien waarop alle ToDo's staan waarvan de datum binnenkort vervalt.",
        images: ["Scherm1.jpg", "Scherm2.jpg"],
        verdict: "Hard werk loont. Zelf ben ik uiterst tevreden met mijn ToDo app. Ook al was het maar een kleine opdracht, bewijst het nogmaals dat ik niet graag halfslachtig werk oplever.",
        attachments: [],
        languages: [
          LanguageTypes.angular,
          LanguageTypes.ts,
          LanguageTypes.html5,
          LanguageTypes.scss
        ]
      },

      year: "2021-2022",
      img: "todo.jpg",
      category: ProjectTypes.school
    }

    let rootzProject: Project = {
      id: "rootz",
      visible: true,
      title: "ROOTZ barbershop",
      subTitle: "Website voor een barbershop in Zandhoven",

      content: {
        about: "ROOTZ - Herenkapper & Barbier is een exclusieve kapperszaak gelegen in het hart van Zandhoven. Ik kreeg de taak om een nieuwe huisstijl te cre??ren samen met een website. V????r dit project had ROOTZ reeds een reservatiesysteem dat uitstekend werkte waardoor we dit opnieuw konden implementeren op de nieuwe website.\n" +
          "\n" +
          "Ik ben gestart met het ontwerpen van een nieuw logo en de basis lay-out van de website. Na overleg, hadden we het perfecte logo en ontwerp gevonden voor ROOTZ en kon ik starten met het programmeren. De website ging een one pager worden met 5 secties; hero, over ons, aanbiedingen, openingsuren en contact. Natuurlijk is deze website gemaakt met alle moderne regels van de kunst: een minimale laadtijd, responsiviteit voor mobiele apparaten, ...\n" +
          "Het resultaat kunt u onderaan bekijken.",
        contribution: "Van logo tot website heb ik alles zelf gerealiseerd. Ook heb ik Nick, de eigenaar, vaak een aantal ontwerpen gegeven waaruit hij de best passende opties heeft gekozen. Voor deze website is er geen onderhoud nodig dus dit heb ik volledig overgelaten aan Nick, maar als er technische problemen zijn, mag hij mij altijd contacteren.",
        images: [
          "Scherm1.jpg",
          "Scherm2.jpg",
          "Scherm3.jpg",
          "Scherm4.jpg",
          "Logo.jpg"
        ],
        verdict: "Nick was zeer tevreden over het eindresultaat.\n" +
          "???Ik ben super tevreden met mijn samenwerking met Joppe. Hij denkt graag mee en schiet ook snel in actie. Enkel maar positieve ervaringen dus!???",
        attachments: [
          {
            name: "Website",
            url: "https://www.rootzbarber.com/",
            type: AttachmentTypes.website
          }
        ],
        languages: [
          LanguageTypes.html5,
          LanguageTypes.scss,
          LanguageTypes.js
        ]
      },
      year: "2020-2021",
      img: "rootz.jpg",
      category: ProjectTypes.website
    }

    let phpProject: Project = {
      id: "php",
      visible: true,
      title: "Project PHP",
      subTitle: "Web applicatie voor een freerunning club",

      content: {
        about: "Tijdens mijn tweede jaar in de opleiding Application Development, kregen mijn 4 teamgenoten en ik de opdracht om een project uit te werken voor een klant. Ter voorbereiding kregen we een analyserapport waaruit we alle nodige informatie moesten halen over de functionaliteiten, gevolgd door een reeks van gesprekken met onze opdracht gever, Ward Kerkhofs.\n" +
          "\n" +
          "Het project is een webapplicatie ontwikkeld in het Laravel framework, dat zou dienen voor een freerunning club. In deze club is Ward de voorzitter maar hij regelde nog alles zelf op papier. Vandaar kregen we de opdracht om al deze processen en functionaliteiten in een moderne applicatie te steken. Hierin zit bijvoorbeeld een login functionaliteit, een 15 tal CRUD's om gegevens te beheren en een webshop.\n" +
          "\n" +
          "Dit project is gemaakt in samenwerking met: Seppe Geudens (Team lead), Helder Ceyssens (Document lead), Volkert Moreels en Matthias Van de Poel.",
        contribution: "Aan het begin van onze eerste sprint, werden alle functionaliteiten in issues opgedeeld die dan werden toegewezen aan elk van ons. De bedoeling was dat als je klaar bent met een issue, dat je aan de volgende begint (SCRUM). De issues die ik op mij heb genomen, hebben allemaal te maken met de Webshop, Gebruikers CRUD, Artikelen CRUD, Bestelperiodes CRUD en de navigatie. Hiernaast was ik ook verantwoordelijk voor de huisstijl van het project.",
        images: [
          "Scherm1.jpg",
          "Scherm2.jpg",
          "Scherm3.jpg",
          "Scherm4.jpg",
          "Scherm5.jpg",
        ],
        verdict: "Dit project is gebouwd op het Laravel framework, wat een nieuwe ervaring was voor mij. Het was ook de eerste keer dat ik met een web framework een webapplicatie heb gebouwd. Deze ervaring heeft mij veel bijgeleerd, niet alleen op technisch vlak, maar ook wat ik later wil doen na mijn opleiding: webapplicaties ontwikkelen.",
        attachments: [{name: "Web applicatie", url: "https://wka.sinners.be/", type: AttachmentTypes.website}],
        languages: [
          LanguageTypes.laravel,
          LanguageTypes.php,


        ]

      },

      year: "2020-2021",
      img: "php.jpg",
      category: ProjectTypes.school
    }

    let wpfProject: Project = {
      id: "wpf",
      visible: true,
      title: "WPF Schaken",
      subTitle: "WPF applicatie bordspel: schaken",
      content: {
        about: "Tijdens mijn tweede jaar in de opleiding Application Development, kreeg ik de opdracht om een bordspel te maken voor de WPF cursus. We mochten zelf kiezen welk bordspel we gingen maken, en mijn keuze ging uit naar het schaakspel. Het spel moest minstens twee CRUD pagina's bevatten en er moest een link gelegd worden naar een Azure databank waarin we al onze gegevens opslaan.\n" +
          "\n" +
          "WPF staat voor Windows Presentation Foundation en is al ????n van de oudere frameworks maar wordt tot op vandaag de dag nog altijd gebruikt. Wij hebben gewerkt met het MVVM (Model-View-ViewModel) patroon wat een logische structuur geeft en de code onderhoudbaar maakt.",
        contribution: "Het schaakspel zelf werkt volledig. Je moet alleen samen op hetzelfde scherm spelen, maar dit was ook niet de bedoeling omdat we hier geen funcionaliteiten voor hadden geleerd om dit te realiseren. Verder zijn er nog 2 werkende CRUD's. Op de eerste kan je de spelers beheren. Op de tweede kan je de matchgeschiedenis bekijken en deze eventueel veranderen. Er zijn ook twee verschillende spelmodi namenlijk Ranked en Normal. Bij Ranked zullen de ratings van de spelers veranderen.",
        images: [
          "Scherm1.JPG",
          "Scherm2.JPG",
          "Scherm3.JPG",
          "Scherm4.JPG",
          "Scherm5.JPG",
        ],
        verdict: "Persoonlijk ben ik geen fan van het programmeren met het MVVM patroon. Vergeleken met MVC is dit onnodig ingewikkeld. WPF heeft zijn eigen voor- en nadelen maar ik ben er wel zeker van dat ik dit later in mijn professionele carri??re niet meer wil tegenkomen. Het leuke aan deze opdracht was zeker en vast de logica uitschrijven over elk schaakstuk.",
        attachments: [{name: "Github", url: "https://github.com/PeetersJ2010/WPF-Schaken", type: AttachmentTypes.website}]
        ,languages: [
          LanguageTypes.wpf,
          LanguageTypes.csharp
        ]
      },

      year: "2020-2021",
      img: "wpf.jpg",
      category: ProjectTypes.school
    }

    let idkdProject: Project = {
      id: "idkd",
      visible: true,
      title: "In Den Kleyne Doorenboom",
      subTitle: "Website voor een brasserie",

      content: {
        alert: {
          title: "Update 2022:",
          content: "In Den Kleyne Doorenboom is overgenomen door De Courant. De vorige website is nog altijd onderaan terug te vinden.",
        },
        languages: [
          LanguageTypes.html5,
          LanguageTypes.scss,
          LanguageTypes.js,

        ],
        about: "In Den Kleyne Doorenboom is een brasserie gelegen te Kasterlee. Via een kennis ben ik met de eigenaars in contact gekomen en heb ik zo de opdracht gekregen om de website te vernieuwen. Dit was zeker noodzakelijk omdat de oude website verouderd was. Deze opdracht heb ik met open armen ontvangen. Zo ben ik begonnen met een aantal prototypes te maken zodat ik mezelf kon inleven in de klassieke stijl van de eigenaars en de brasserie zelf.\n" +
          "\n" +
          "Nadat er een overeenkomst was over de stijl van de website, begon het coderen. De website bestaat uit 5 pagina's namelijk: Home, Menu, Foto's, Info en Historiek. Elke pagina volgt de regels van de kunst zoals bijvoorbeeld: een minimale laadtijd, responsiviteit voor mobiele apparaten, error-pagina's, ...",
        contribution: "Alles werd volledig aan mij overhandigd, van het ontwerpen tot coderen en onderhoud. Hieronder staan een aantal foto's van het eindresultaat.",
        images: [
          "Scherm1.JPG",
          "Scherm2.JPG",
          "Scherm3.JPG",
          "Scherm4.JPG",
          "Scherm5.JPG",
        ],
        verdict: "Zowel de uitbaters van Den Doorenboom als ikzelf waren zeer tevreden met het eindresultaat. Het is ook leuk om alles wat ik heb geleerd over webdesign, nu ook effectief in de praktijk toe te passen. Elke nieuwe website die ik schrijf, leert me altijd wel iets bij." ,
        attachments: [{name: "Website", url: "https://decourant.be/", type: AttachmentTypes.website}]
      },

      year: "2020-2021",
      img: "idkd.png",
      category: ProjectTypes.website
    }

    let drfProject: Project = {
      id: "drf",
      visible: true,
      title: "DRforces",
      subTitle: "Website voor een drone hobbypiloot",

      content: {
        about: "DRForces is een klein bedrijf gelegen te Kasterlee dat zich specialiseert in consulting, drone piloting en webdesign. Ik heb voor dit bedrijf een website gemaakt ter promotie en uit noodzaak. Op de startpagina kunt u kiezen uit de 3 onderwerpen; consulting, drone piloting en web design. Elk onderdeel heeft zijn eigen sub html pagina waarin hierover uitleg wordt gegeven. Momenteel is alleen het webdesign gedeelte volledig uitgewerkt, maar de andere 2 onderwerpen zullen dezelfde layout krijgen met andere content.",
        contribution: "We hebben samen de website ontworpen en dan ben ik zelf aan slag gegaan met het coderen. Hieronder staan een aantal foto's van het eindresultaat van de webdesign pagina.",
        images: [
          "Scherm1.jpg",
          "Scherm2.jpg",
          "Scherm3.jpg",
          "Scherm4.jpg",
          "Scherm5.jpg",
        ],
        verdict: "DRForces is nog jong maar heeft veel beloftevolle projecten in het vooruitzicht. Met een zeer gemotiveerd en verstandig team zullen ze zeker aan de top komen.",
        attachments: [{name: "Website", url: "https://drforces.eu/", type:AttachmentTypes.website}]
        ,languages: [
          LanguageTypes.html5,
          LanguageTypes.scss,
          LanguageTypes.js,

        ]
      },

      year: "2020-2021",
      img: "drf.jpg",
      category: ProjectTypes.website
    }

    let caProject: Project = {
      id: "ca",
      visible: true,
      title: "Cordova App",
      subTitle: "Project Cordova: Muziek speler",

      content: {
        about: "Tijdens mijn tweede jaar in de opleiding Application Development, kreeg ik de opdracht om een app te maken voor de smartphone tijdens het vak Cordova. Hierbij mochten we zelf kiezen wat we gingen doen. Ik had gekozen om een muziek-app te maken (Enirt Music Player). Hierop kan je luisteren naar lokale .mp3 bestanden, geluid opnemen en terug afspelen, en de app visueel aanpassen naar de voorkeur van de gebruiker.\n" +
          "\n" +
          "De app is ontwikkeld in jQuery, javascript, html, scss en draait op het Cordova framework met enkele plugins. Er is ook een verbinding met een MySQL-database die er voor zorgt dat alle informatie over de mp3-bestanden wordt opgeslagen. De app is volledig klaar en is te downloaden onderaan deze pagina.",
        contribution: "Dit was een solo-opdracht, wat wilt zeggen dat ik van het begin tot het einde verantwoordelijk ben voor het eindresultaat.",
        images: [
          "Scherm1.jpg",
          "Scherm2.jpg",
          "Scherm3.jpg",
          "Scherm4.jpg",
        ],
        verdict: "Dit was de eerste keer dat ik een volledig mobiele app heb geschreven. Door middel van jQuery en Javascript heb ik de mogelijkheden ontdekt van het Cordova framework. Ook heb ik nieuwe inzichten gekregen in het gebruiken van de meta data van .mp3 bestanden.",
        attachments: [
          {name: "APK", url: "", type: AttachmentTypes.download},
          {name: "Verslag", url: "", type: AttachmentTypes.download}
        ],
        languages: [
          LanguageTypes.cordova,
          LanguageTypes.js
        ]
      },

      year: "2020-2021",
      img: "ca.jpg",
      category: ProjectTypes.school
    }



    this.projects.push(stageProject);
    this.projects.push(shopProject);
    this.projects.push(bosteoProject);
    this.projects.push(projectVierPuntNul);
    this.projects.push(niza);
    this.projects.push(todoProject);
    this.projects.push(rootzProject);
    this.projects.push(phpProject);
    this.projects.push(wpfProject);
    this.projects.push(idkdProject);
    this.projects.push(drfProject);
    this.projects.push(caProject);
  }

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: string): Project | null {
    return this.projects.find(p => p.id === id) ?? null;
  }
}
