import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DexCoreService } from '../../shared/services/dex-core.service';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'dex-home',
  templateUrl: './dex-home.html',
  styleUrls: ['./dex-home.scss']
})
export class DexHomeComponent implements OnInit {
  public questionList: any;
  public modelToSend: any[] = [];

  constructor(private _dexCoreService: DexCoreService,
              private _sanitizer: DomSanitizer) {

  }

  public ngOnInit(): void {
    this.getQuestionsSurvey();
  }

  public getQuestionsSurvey(): void {
    const url = 'survey.json';
    this._dexCoreService.getQuestionsSurvey(url)
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
  }

  public transformSafeHtml(html: string): SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(html);
  }

  // // 1: Textbox, 2: Dropdown list
}
