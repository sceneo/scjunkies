import { Injectable } from '@angular/core';
import {HomeContent} from "../content/home-content.interface";

@Injectable({
  providedIn: 'root',
})
export class ContentService {

  constructor() {}

  static getTitleName(): string {
    return "SC Junkies 1999";
  }

  static getHomeContent(): HomeContent {
    return {
      subHeader: "unabhängig - kritisch - frei",
      paragraphs: [
        "Wir sind was wir sind, wir sind wie wir sind. Mal sind wir mehr, mal sind wir weniger. Mal vergöttern wir unseren Verein, mal verzweifeln wir an ihm. Unsere Leidenschaft für den SC Freiburg hält nun schon viele Jahre an. Wir haben bis heute gemeinsam alle Höhen und Tiefen mit unserem SCF durchlitten. Viele von uns haben mittlerweile Familien gegründet, sind in uns fordernden Jobs tätig, wohnen nicht mehr in und um Freiburg, müssen immer wieder andere Prioritäten setzen. Mitglieder kamen, Mitglieder gingen - Aufstiege und Abstiege wurden gefeiert und erlitten. Wir haben viel guten Fussball sehen und feiern dürfen, aber auch viele Grottenkicks mitansehen müssen. Wir haben unsere Spieler vergöttert und auch einige am liebsten in die Wüste geschickt, haben Trainer gefeiert und konnten sie eines Tages nicht mehr verstehen, haben Abschiede bedauert und Neuanfänge begrüsst, haben die Arbeit der Vereinsführung gelobt und kritisiert.",
        "Eines aber blieb und bleibt für uns Junkies in all dieser Zeit bestehen - wir lieben unseren Sport-Club von ganzem Herzen und gerade deshalb betrachten wir unseren Verein nicht durch die rosarote Vereinsbrille. Wir sind Verfechter der Stehplatzkultur, wir STEHEN für bedingungslosen Support während der 90 und mehr Minuten der Spiele unserer Mannschaft und nehmen uns auch das Recht heraus, was uns stört, anzusprechen. Wie lange wir das alles noch (mit-)machen wollen?\n" +
        "Wer weiss das schon !?",
        "Im Fussball zählt nur das hier und heute, nichts hat eine geringere Halbwertstzeit, als die Ergebnisse und das Geschwätz von gestern. Das Einzige, was bleibt, sind die Derbysiege! Daher geht unser Blick nach vorn - wir denken von Spiel zu Spiel, wir schwätzen von Spiel zu Spiel, wir singen von Spiel zu Spiel. Wir brauchen die nächste Dosis unserer Droge SCF. Unser Dealer steht dort, wo die Dreisam stadteinwärts fliesst. Noch geht ihm der Stoff nicht aus und uns schmeckt es nach wie vor. Doch vielleicht heisst unser \"goldener Schuss\" ja \"Pokalendspiel\"..?",
      ],
    }
  }
}
