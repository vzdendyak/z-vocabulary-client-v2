import {Component, Input, OnInit} from '@angular/core';
import {MeaningModel} from '../../../block/models/meaning-model';
import {WordApiService} from '../../services/word-api.service';

@Component({
  selector: 'app-meaning-info',
  templateUrl: './meaning-info.component.html',
  styleUrls: ['./meaning-info.component.scss']
})
export class MeaningInfoComponent implements OnInit {
  @Input() meaning: MeaningModel;
  editState = false;
  deleteState = false;

  constructor(private wordService: WordApiService) {
  }

  ngOnInit(): void {
  }

  async addExample(example) {
    const text = example.value.trim();
    if (!text) {
      return;
    }
    this.wordService.createExample$.next({text, meaningId: this.meaning.id});
  }

  addCollocation(collocation) {
    const text = collocation.value.trim();
    if (!text) {
      return;
    }
    this.wordService.createCollocation$.next({text, meaningId: this.meaning.id});
  }

  switchEditState() {
    this.editState = !this.editState;
  }

  switchDeleteState() {
    this.deleteState = !this.deleteState;
  }

  deleteExample(id) {
    this.wordService.deleteExample$.next(id);
  }

  deleteCollocation(id) {
    this.wordService.deleteCollocation$.next(id);
  }

  deleteMeaning() {
    this.wordService.deleteMeaning$.next(this.meaning.id);
  }
}
