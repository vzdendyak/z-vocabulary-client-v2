import {Component, OnDestroy, OnInit} from '@angular/core';
import {WordApiService} from '../../services/word-api.service';
import {ActivatedRoute} from '@angular/router';
import {WordModel} from '../../../block/models/word-model';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-word-info',
  templateUrl: './word-info.component.html',
  styleUrls: ['./word-info.component.scss']
})
export class WordInfoComponent implements OnInit, OnDestroy {
  word: WordModel;
  private unsubscribe$ = new Subject<void>();

  constructor(private route: ActivatedRoute, private wordService: WordApiService) {
    route.params.subscribe(value => {
      console.log(value);
      if (!Number.isNaN(value.id)) {
        this.loadWord(value.id);
      }

    });
  }

  ngOnInit(): void {
    this.wordService.deleteCollocation$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(async value => {
        await this.wordService.deleteCollocations(value).toPromise();
        await this.loadWord(value.id);
      });
    this.wordService.createExample$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(async value => {
        await this.wordService.createExample(value.text, value.meaningId).toPromise();
        await this.loadWord(value.id);
      });
    this.wordService.deleteExample$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(async value => {
        await this.wordService.deleteExample(value).toPromise();
        await this.loadWord(value.id);
      });
    this.wordService.createCollocation$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(async value => {
        await this.wordService.createCollocations(value.text, value.meaningId).toPromise();
        await this.loadWord(value.id);
      });
    this.wordService.deleteMeaning$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(async value => {
        await this.wordService.deleteMeaning(value).toPromise();
        await this.loadWord(value.id);
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  async loadWord(id = this.word.id) {
    this.word = await this.wordService.getWordById(id).toPromise();
  }

  async createMeaning(partOfSpeech, text) {
    const partOfSpeechValue = partOfSpeech.value.trim();
    const textValue = text.value.trim();
    if (!partOfSpeechValue || !textValue) {
      return;
    }

    const result = await this.wordService.createWordMeaning(partOfSpeechValue, textValue, this.word.id).toPromise();
    console.log(result);
    if (result) {
      await this.loadWord();
      partOfSpeech.value = '';
      text.value = '';
    }
  }
}
