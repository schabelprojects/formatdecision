import { Component, inject } from '@angular/core';
import { MetaModule } from '../../services/meta.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formatdecisionapp',
  imports: [MetaModule],
  templateUrl: './formatdecisionapp.component.html',
  styleUrl: './formatdecisionapp.component.css',
})
export class FormatdecisionappComponent {
  stepOneForm: FormGroup;
  stepTwoForm: FormGroup;
  stepThreeForm: FormGroup;
  stepFourForm: FormGroup;
  stepFiveForm: FormGroup;
  stepSixForm: FormGroup;
  stepSevenForm: FormGroup;
  stepEightForm: FormGroup;

  questions = [
    'Wie sollen die Teilnehmenden das Lernangebot in ihren Alltag integrieren können?',
    'Wie viel direkte Betreuung (Rückfragen, Hilfestellungen, Diskussionen etc.) durch dich als Trainer:in ist erforderlich?',
    'Wie viel Vernetzung und Austausch zwischen den Teilnehmenden ist für dein Thema wichtig?',
    'Wie viel praktische Anwendung braucht es, um deine Lerninhalte gut zu vermitteln?',
    'Wie umfangreich sind deine Lerninhalte?',
    'Wie flexibel müssen deine Lerninhalte im Kurs angepasst und aktualisiert werden können? ',
    'Sprichst du mit deinen Lerninhalten eine breite Zielgruppe an und wie oft werden sie benötigt?',
    'Abschluss',
  ];

  stepOneOptions = [
    {
      label: 'Der Kurs sollte zu festen Zeiten stattfinden.',
      points: 6,
    },
    {
      label:
        'Ein Mix aus festen Terminen und eigenständigem Lernen wäre ideal für mein Thema.',
      points: 3,
    },
    {
      label:
        'Die Teilnehmenden sollen lernen können, wann und wo es ihnen passt.',
      points: 1,
    },
  ];
  stepTwoOptions = [
    {
      label:
        'Gelegentliche Unterstützung ist gewünscht, kombiniert mit selbstständigem Lernen.',
      points: 3,
    },
    {
      label:
        'Zum Verständnis sollten die Teilnehmenden regelmäßig Fragen stellen und Feedback erhalten können.',
      points: 6,
    },
    {
      label:
        'Die Inhalte können vom Lernenden selbstständig erarbeitet werden.',
      points: 1,
    },
  ];
  stepThreeOptions = [
    {
      label:
        'Das Thema kann selbständig und unabhängig voneinander erarbeitet werden.',
      points: 1,
    },
    {
      label:
        'Die Teilnehmenden sollen regelmäßig in Gruppen arbeiten und Erfahrungen austauschen, um das Themenverständnis zu fördern. ',
      points: 6,
    },
    {
      label:
        'Gelegentliche Austauschphasen unterstützen das Lernen, sind aber nicht ständig notwendig. ',
      points: 3,
    },
  ];
  stepFourOptions = [
    {
      label: 'Wenig, die Lernenden sollen die Inhalte hauptsächlich kennen.',
      points: 6,
    },
    {
      label:
        'Der Großteil der Lerninhalte soll durch Diskussionen und praktischen Anwendung erarbeitet werden.',
      points: 1,
    },
    {
      label:
        'Ein Teil der Inhalte können als reines Wissen vermittelt werden, hierauf aufbauend ist die praktische Anwendung wichtig',
      points: 3,
    },
  ];
  stepFiveOptions = [
    {
      label:
        'Die Inhalte sind ein Mix aus grundlegenden und anspruchsvolleren Themen.',
      points: 3,
    },
    {
      label:
        'Die Inhalte sind komplex und für das Verständnis ist eine Praxisorientierung wichtig.',
      points: 6,
    },
    {
      label:
        'Die Inhalte sind gut verständlich und können in einer kurzen Lerneinheit vermittelt werden.',
      points: 1,
    },
  ];
  stepSixOptions = [
    {
      label:
        'Die Inhalte sind eher feststehend und Grundlegendes verändert sich nicht.',
      points: 1,
    },
    {
      label:
        'Ein Teil der Inhalte bzw. die Grundlagen sind festgelegt, aber es gibt Raum für aktuelle und regelmäßige Anpassungen.',
      points: 3,
    },
    {
      label:
        'Die Inhalte verändern sich laufend und aktuelle Themen und Diskussionen müssen regelmäßig miteinbezogen werden.',
      points: 6,
    },
  ];
  stepSevenOptions = [
    {
      label:
        'Die Inhalte sind für eine breite Zielgruppe und werden oft gebraucht.',
      points: 1,
    },
    {
      label:
        'Die Inhalte richten sich an eine kleine Zielgruppe, die nur gelegentlich geschult wird.',
      points: 6,
    },
    {
      label:
        'Ein Teil der Inhalte sind für eine bestimmte Zielgruppe, die Grundlagen aber für viele und werden regelmäßig genutzt.',
      points: 3,
    },
  ];

  constructor(private fb: FormBuilder) {
    this.stepOneForm = this.fb.group({
      option: ['', Validators.required],
    });

    this.stepTwoForm = this.fb.group({
      option: ['', Validators.required],
    });

    this.stepThreeForm = this.fb.group({
      option: ['', Validators.required],
    });

    this.stepFourForm = this.fb.group({
      option: ['', Validators.required],
    });

    this.stepFiveForm = this.fb.group({
      option: ['', Validators.required],
    });

    this.stepSixForm = this.fb.group({
      option: ['', Validators.required],
    });

    this.stepSevenForm = this.fb.group({
      option: ['', Validators.required],
    });

    this.stepEightForm = this.fb.group({
      option: ['', Validators.required],
    });
  }

  selectedPoints = {
    stepOne: 0,
    stepTwo: 0,
    stepThree: 0,
    stepFour: 0,
    stepFive: 0,
    stepSix: 0,
    stepSeven: 0,
  };

  // Berechne die Gesamtpunktzahl
  calculateTotalPoints(): number {
    return (
      this.selectedPoints.stepOne +
      this.selectedPoints.stepTwo +
      this.selectedPoints.stepThree +
      this.selectedPoints.stepFour +
      this.selectedPoints.stepFive +
      this.selectedPoints.stepSix +
      this.selectedPoints.stepSeven
    );
  }

  // Aktualisiere die Punkte, wenn eine Option ausgewählt wird
  updatePoints(step: number, points: number) {
    // Setze die Punkte für den jeweiligen Schritt
    switch (step) {
      case 1:
        this.selectedPoints.stepOne = points;
        break;
      case 2:
        this.selectedPoints.stepTwo = points;
        break;
      case 3:
        this.selectedPoints.stepThree = points;
        break;
      case 4:
        this.selectedPoints.stepFour = points;
        break;
      case 5:
        this.selectedPoints.stepFive = points;
        break;
      case 6:
        this.selectedPoints.stepSix = points;
        break;
      case 7:
        this.selectedPoints.stepSeven = points;
        break;
    }

    // Berechne die Gesamtpunktzahl und aktualisiere die Anzeige
    this.totalPoints = this.calculateTotalPoints();
  }

  totalPoints: number = 0;

  getTextForTotalPoints(): string {
    if (this.totalPoints >= 31) {
      return 'Für dein Thema bietet sich eine Veranstaltung an!'; // 42-31 Punkte
    } else if (this.totalPoints >= 17) {
      return 'Für dein Thema bietet sich eine Kombination aus einer Veranstaltung und einem E-Learning (Blendend Learning) an!'; // 30-17 Punkte
    } else {
      return 'Für dein Thema bietet sich ein E-Learning an!';
    }
  }
}
