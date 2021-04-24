import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BlockApiService} from '../../services/block-api.service';
import {WordModel} from '../../models/word-model';
import {WordApiService} from '../../../word/services/word-api.service';

@Component({
  selector: 'app-block-info',
  templateUrl: './block-info.component.html',
  styleUrls: ['./block-info.component.scss']
})
export class BlockInfoComponent implements OnInit {
  blockId: number;
  blockName: string;
  words: WordModel[];

  constructor(private route: ActivatedRoute, private blockService: BlockApiService, private wordService: WordApiService) {
    route.params.subscribe(value => {
      console.log(value);
      if (!Number.isNaN(value.id)) {
        this.blockId = value.id;
        this.loadData();
      }

    });
    this.route.queryParams.subscribe(value => {
      console.log(value);
      if (value.name) {
        this.blockName = value.name;
      }
    });
  }

  ngOnInit(): void {
  }

  public async loadData(id: any = this.blockId) {
    let result = await this.blockService.getWordsByBlockId(id).toPromise();
    this.words = result;
    console.log(result);
  }


  public async createWord(name: string) {
    console.log(name);
    if (!name) {
      return;
    }
    let result = await this.wordService.createWord(name, this.blockId).toPromise();
    console.log(result);
    if (result) {
      await this.loadData();
    }
  }


}
