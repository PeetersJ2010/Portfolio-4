import {Injectable} from '@angular/core';
import { AttachmentTypes } from '../interfaces/attachment';
import {LanguageType, LanguageTypes, Project} from "../interfaces/project";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [];

  constructor() {
    let shopProject: Project = {
      id: "shop",
      title: "DSport Webshop",
      subTitle: "Angular Challenge: Sport Webshop",

      content: {
        about:
          "Tijdens mijn derde jaar in de professionele bachelor opleiding Application Development op Thomas More in Geel, kregen alle studenten de opdracht om in groep een webshop te maken in Angular en een back-end naar keuze. Samen met mijn groep hadden we gekozen voor de combinatie van Angular en een .NET back-end omdat de opdrachtgever, Michiel van dotNET lab was, en hij een sterke voorkeur hiervoor had." +
          "\n\n" +
          "Er werden een heleboel eisen opgesteld door dotNet lab en omdat we maar 3 weken de tijd hadden gekregen, moesten we alles op alles zetten. De eisen waren onder andere een overzicht van de producten, detail pagina's, winkelmandje, beheren van producten en nog veel meer. Het thema van de webshop was voor iedereen hetzelfde, namelijk een webshop voor sportvoeding en accessoires. Aangevuld met deze basis eisen, kwamen er nog een aantal nice-to-haves aan bod zoals pagination, superadmin rol, suggesties uit vorige aankopen, ..."
        ,
        contribution: "Samen met Jorne Marx, Albert Baffour Awuah, Jens Fillée en Jules Debbaut, hebben we deze opdracht tot op een mooi resultaat kunnen afwerken. We hebben alle basis eisen en nice-to-haves kunnen integreren in de webshop door elks een tandje bij te steken wanneer het nodig was. Zelf was ik verantwoordelijk voor de front-end en huisstijl van de webshop. Zo heb ik alle scherm ontwerpen gemaakt als prototype en hierna geprogrammeerd en ook nog een heleboel front-end functionaliteiten toegevoegd zoals de product suggesties, artikel beheer pagina, product overzicht, navigatie, ....",
        images: ["Scherm1.jpg","Scherm2.jpg","Scherm3.jpg","Scherm4.jpg","Scherm5.jpg"],
        verdict: "Met deze opdracht zijn we als eerste beëindigd voor de Angular challenge. Natuurlijk zijn we allemaal heel trots op het teamwerk en de webshop zelf. Na deze opdracht kan ik toch wel zelfzeker zeggen dat ik thuis hoor in de front-end. Angular is een zeer tof framework om in te werken en zeker iets waar ik naar de toekomst zal uitkijken.",
        attachments: [],
        languages: [
          LanguageTypes.angular,
          LanguageTypes.ts,
          LanguageTypes.dotNet,
          LanguageTypes.csharp
        ]
      },

      year: "2021-2022",
      img: "shop.jpg",
      category: "School project"
    }

    let todoProject: Project = {
      id: "todo",
      title: "ToDo App",
      subTitle: "Project Angular: ToDo App",

      content: {
        about: "Tijdens mijn derde jaar, in de professionele bachelor opleiding, Application Development op Thomas More in Geel, kregen alle studenten de opdracht om een Todo applicatie te maken in Angular. De score hierop bepaalde de groepjes voor de Angular Challenge die hierna volgde. Hierdoor wist ik dat ik alles op alles moest zetten, zodat ik tijdens de Angular Challenge bij een goed groepje zou zitten. Deze challenge is, naar mijn mening, de op 1 na meest belangrijke opdracht van de opleiding. Door mijn goed resultaat, ben ik beland in het beste groepje en ben ik hiermee op de eerste plaats geëindigd in de Angular Challenge.",
        contribution: "In de Todo app krijgt de gebruiker links een lijst te zien waarop alle todo lijsten te zien zijn. In het midden opent een lijst met alle todo's wanneer er een todo lijst wordt geselecteerd. Tot slot krijgen we rechts een scherm te zien waarop alle todo's staan waarvan de datum binnenkort vervalt.",
        images: ["Scherm1.jpg", "Scherm2.jpg"],
        verdict: "Hard werk loont. Zelf ben ik uiterst tevreden met mijn Todo app. Ook al was het maar een kleine opdracht, bewijst het nogmaal dat ik niet graag halfslachtig werk oplever.",
        attachments: [],
        languages: [
          LanguageTypes.angular,
          LanguageTypes.ts
        ]
      },

      year: "2021-2022",
      img: "todo.jpg",
      category: "School project"
    }

    let rootzProject: Project = {
      id: "rootz",
      title: "ROOTZ barbershop",
      subTitle: "Website voor een barbershop in Zandhoven",

      content: {
        about: "ROOTZ - Herenkapper & Barbier is een exclusieve kapperszaak gelegen in het hart van Zandhoven. Als taak kreeg ik om een nieuwe huisstijl te creëren samen met een website. Vooraf dit project bezat ROOTZ reeds van een reservatie systeem dat uitstekend werkte waardoor we dit opnieuw konden implementeren op de nieuwe website.\n" +
          "\n" +
          "Ik ben begonnen met het ontwerpen van een nieuw logo en de basis lay-out van de nieuwe website. Na overleg, hadden we het perfecte logo en ontwerp gevonden voor ROOTZ en kon ik beginnen met programmeren. De website ging een one pager worden met 5 secties; hero, over ons, aanbiedingen, openingsuren en contact. Natuurlijk is deze website gemaakt met alle moderne regels van de kunst: een minimale laadtijd, responsiviteit voor mobiele apparaten, ...\n" +
          "Het resultaat kunt u onderaan bekijken.",
        contribution: "Van logo to website heb ik alles zelf gemaakt, maar ik heb Nick, de eigenaar, altijd een aantal ontwerpen gegeven waaruit hij de best passende opties heeft gekozen. Voor deze website is er geen onderhoud nodig dus dit heb ik volledig overgelaten aan Nick, maar als er technische problemen zijn, mag hij mij altijd contacteren.",
        images: [
          "Scherm1.jpg",
          "Scherm2.jpg",
          "Scherm3.jpg",
          "Scherm4.jpg",
          "Logo.jpg"
        ],
        verdict: "Nick was zeer tevreden over het eindresultaat.\n" +
          "“Ik ben super tevreden met mijn samenwerking met Joppe. Hij denkt graag mee en schiet ook snel in actie. Enkel maar positieve ervaringen dus!”",
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
      category: "Website"
    }

    let phpProject: Project = {
      id: "php",
      title: "Project PHP",
      subTitle: "Web applicatie voor een freerunning club",

      content: {
        about: "Tijdens mijn tweede jaar in de opleiding Application Development, kregen ik en mijn 4 teamgenoten de opdracht om een project uit te werken voor een klant. Ter voorbereiding kregen we een analyse rapport waaruit we alle nodige informatie moesten halen over de functionaliteiten, gevolgd door een reeks van gesprekken met onze opdracht gever, Ward Kerkhofs.\n" +
          "\n" +
          "Het project is een webapplicatie ontwikkeld in het Laravel framework, dat zou dienen voor een freerunning club. In deze club is Ward de voorzitter maar hij regelde nog alles zelf op papier. Vandaar kregen we de opdracht om al deze processen en functionaliteiten in een moderne applicatie te steken. Hierin zit bijvoorbeeld een login functionaliteit, een 15 tal CRUD's om gegevens te beheren en een webshop. De applicatie is geschreven in PHP.\n" +
          "\n" +
          "Dit project is gemaakt in samenwerking met: Seppe Geudens (Team lead), Helder Ceyssens (Document lead), Volkert Moreels en Matthias Van de Poel.",
        contribution: "Aan het begin van onze eerste sprint, werden alle functionaliteiten in issues opgedeeld die dan werden toegewezen aan ons. De bedoeling was dat als je klaar bent met een issue, dat je aan de volgende begint (SCRUM). De issues die ik op mij heb genomen, hebben allemaal te maken met de Webshop, Gebruikers CRUD, Artikelen CRUD, Bestelperiodes CRUD en de navigatie. Hiernaast was ik ook verantwoordelijk voor de huisstijl van het project.",
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
      category: "School project"
    }

    let wpfProject: Project = {
      id: "wpf",
      title: "WPF Schaken",
      subTitle: "WPF applicatie bordspel: schaken",
      content: {
        about: "Tijdens mijn tweede jaar in de opleiding Application Development, kreeg ik de opdracht om een bordspel te maken voor de WPF cursus. We mochten zelf kiezen welk bordspel we gingen maken, en ik heb hierbij gekozen om het schaakspel te maken. Het spel moest minstens twee CRUD pagina's bevatten en er moest een link gelegd worden naar een Azure databank waarin we al onze gegevens opslaan.\n" +
          "\n" +
          "WPF staat voor Windows Presentation Foundation en is al een van de oudere frameworks maar wordt tot op vandaag de dag nog altijd gebruikt. Wij hebben gewerkt met het MVVM (Model-View-ViewModel) patroon wat een logische structuur geeft en de code onderhoudbaar maakt.",
        contribution: "Het schaakspel zelf werkt volledig. Je moet alleen samen op hetzelfde scherm spelen, maar dit was ook niet de bedoeling omdat we hier geen funcionaliteiten voor hadden geleerd om dit te realiseren. Verder zijn er nog 2 werkende CRUD's. Op de eerste kan je de spelers beheren. Op de tweede kan je de matchgeschiedenis bekijken en deze eventueel veranderen. Er zijn ook twee verschillende spelmodi namenlijk Ranked en Normal. Bij Ranked zullen de ratings van de spelers veranderen.",
        images: [
          "Scherm1.JPG",
          "Scherm2.JPG",
          "Scherm3.JPG",
          "Scherm4.JPG",
          "Scherm5.JPG",
        ],
        verdict: "Persoonlijk ben ik geen fan van het programmeren met het MVVM patroon. Vergeleken met MVC is dit onnodig ingewikkeld. WPF heeft zijn eigen voor- en nadelen maar ik ben er wel zeker van dat ik dit later in mijn professionele carrière niet meer wil tegenkomen. Het leuke aan deze opdracht was zeker en vast de logica uitschrijven over elk schaakstuk.",
        attachments: [{name: "Github", url: "https://github.com/PeetersJ2010/WPF-Schaken", type: AttachmentTypes.website}]
        ,languages: [
          LanguageTypes.wpf,
          LanguageTypes.csharp
        ]
      },

      year: "2020-2021",
      img: "wpf.jpg",
      category: "School project"
    }

    let idkdProject: Project = {
      id: "idkd",
      title: "In Den Kleyne Doorenboom",
      subTitle: "Website voor een brasserie",

      content: {
        alert: {
          title: "Update 2022:",
          content: "In Den Kleyne Doorenboom is overgenomen door De Courant. De vorige website is nog altijd onderaan terug te vinden",
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
        verdict: "Zowel ikzelf als de uitbaters van Den Doorenboom waren zeer tevreden met het eindresultaat. Het is ook leuk om alles wat ik heb geleerd over webdesign, nu ook effectief in de praktijk toe te passen. Elke nieuwe website die ik schrijf, leert me altijd wel iets bij." ,
        attachments: [{name: "Website", url: "https://decourant.be/", type: AttachmentTypes.website}]
      },

      year: "2020-2021",
      img: "idkd.png",
      category: "Website"
    }

    let drfProject: Project = {
      id: "drf",
      title: "DRforces",
      subTitle: "Website voor een drone hobbypiloot",

      content: {
        about: "DRForces is een klein bedrijf gelegen te Kasterlee dat zich specialiseert in consultng, drone piloting en web design. Ik heb voor dit bedrijf een website gemaakt om dit te promoten en omdat ze er nog geen hadden. Op de start pagina kunt u kiezen uit de 3 onderwerpen; consulting, drone piloting en web design. Elk onderdeel heeft zijn eigen sub html pagina waarin hierover uitleg wordt gegeven. Momenteel is alleen het webdesign gedeelte volledig uitgewerkt, maar de andere 2 onderwerpen zullen dezelfde layout krijgen met andere content.",
        contribution: "We hebben samen de website ontworpen en dan ben ik zelf aan slag gegaan met het coderen. Hieronder staan een aantal foto's van het eindresultaat van de web design pagina.",
        images: [
          "Scherm1.jpg",
          "Scherm2.jpg",
          "Scherm3.jpg",
          "Scherm4.jpg",
          "Scherm5.jpg",
        ],
        verdict: "DRForces is nog zeer jong maar heeft vele belovende projecten in haar toekomst. Met een zeer gemotiveerd en verstandig team zullen ze zeker aan de top komen.",
        attachments: [{name: "Website", url: "https://drforces.eu/", type:AttachmentTypes.website}]
        ,languages: [
          LanguageTypes.html5,
          LanguageTypes.scss,
          LanguageTypes.js,

        ]
      },

      year: "2020-2021",
      img: "drf.jpg",
      category: "Website"
    }

    let caProject: Project = {
      id: "ca",
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
        verdict: "Dit was de eerste keer dat ik een volledig mobiele app heb geschreven. Door middel van jQuery en Javascript heb ik de mogelijkheden ontdekt van het Cordova framework. Ook heb ik nieuwe inzichten gekregen op het gebruiken van de meta data van .mp3 bestanden.",
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
      category: "School project"
    }

    this.projects.push(shopProject);
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
