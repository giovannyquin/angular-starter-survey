import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {DexCoreService} from '../../shared/services/dex-core.service';
import {SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'dex-home',
  templateUrl: './dex-home.html',
  styleUrls: ['./dex-home.scss']
})
export class DexHomeComponent implements OnInit {
  questionList: any;

  constructor(private _dexCoreService: DexCoreService,
              private _sanitizer: DomSanitizer) {

  }

  ngOnInit(): void {
    this.getQuestionsSurvey();
  }

  getQuestionsSurvey(): void {
    const url = '../../../assets/mock-data/survey.json';
    this._dexCoreService.getQuestionsSurvey(url)
      .subscribe(
        (questionList: any) => {
          this.questionList = questionList;
          console.log('response component ', this.questionList);
        },
        error => <any> error
      );
  }

  transformSafeHtml(html: string): SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(html);
  }

  // // 1: Textbox, 2: Dropdown list
}
