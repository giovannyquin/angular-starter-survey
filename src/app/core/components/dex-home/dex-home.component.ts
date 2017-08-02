import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DexCoreService } from '../../shared/services/dex-core.service';
import { SafeHtml } from '@angular/platform-browser';
import { MdDialog } from '@angular/material';
import { DialogSimple } from '../../../shared/messages-component/simplemessages.component';
import { DialogPopUp } from '../../../shared/messages-component/formpopup.component';
import {Subscription} from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dex-home',
  templateUrl: './dex-home.html',
   styleUrls: [
    'dex-home.scss'
  ]
})
export class DexHomeComponent implements OnInit {
  public questionList: any;
  public modelToSend: any[] = [];
  public displayScreen: Subscription;
  public txtLoading: string;

  constructor(private _dexCoreService: DexCoreService,
              private _sanitizer: DomSanitizer,
              private _translateService: TranslateService,
              public dialog: MdDialog) {

  }

  openDialog(dialogType) {
    if (dialogType == 1) {
      this.dialog.open(DialogSimple);
    }

     if (dialogType == 2) {
      this.dialog.open(DialogPopUp);
    }
  }

  public ngOnInit(): void {
    this._translateService.get('GENERIC.LOADING')
      .subscribe((text: string) => {
        this.txtLoading = text;
      });
    this.getQuestionsSurvey();
  }

  public getQuestionsSurvey(): void {
    const url = 'survey.json';
    this.displayScreen = this._dexCoreService.getQuestionsSurvey(url)
      .subscribe(
        (questionList: any) => {
          this.questionList = questionList;
        },
        (error: any) => {
          return <any> error;
        }
      );
  }

  public onClick(event: any, id?: number, name?: string): void {
    this.modelToSend.push({
      id,
      name
    });
    console.log('click ', id, name, event, this.modelToSend);
  }

  public continueSurvey(): void {
    console.log('continue Surve ', this.modelToSend);
    this.getQuestionsSurvey();
  }

  public transformSafeHtml(html: string): SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(html);
  }

  // // 1: Textbox, 2: Dropdown list
}
