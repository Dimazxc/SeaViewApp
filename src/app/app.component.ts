import { Component } from '@angular/core';

import { SeaInfo } from 'src/models/seaInfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'untitled';
  public imageUrl = 'https://i.ibb.co/fNKLRhN/karta-okeanov.jpg';
  public chosenSeaName = '';
  public chosenSeaId = null;

  private seaInfos: SeaInfo[] = [
    {id: 1, seaName: "Аки"},
    {id: 2, seaName: "Бали"},
    {id: 3, seaName: "Банда"},
    {id: 4, seaName: "Висаян"},
    {id: 5, seaName: "Внутреннее Японское"},
    {id: 6, seaName: "Камотес"},
    {id: 7, seaName: "Коралловое"},
    {id: 8, seaName: "Коро"},
    {id: 9, seaName: "Новогвинейское"},
    {id: 10, seaName: "Минданао"},
    {id: 11, seaName: "Молуккское"},
    {id: 12, seaName: "Савву"},
    {id: 13, seaName: "Серам"},
    {id: 14, seaName: "Сибуян"},
    {id: 15, seaName: "Соломоново"},
    {id: 16, seaName: "Сулавеси"},
    {id: 17, seaName: "Сулу"},
    {id: 18, seaName: "Тувалу"},
    {id: 19, seaName: "Фиджи"},
    {id: 20, seaName: "Флорес"},
    {id: 21, seaName: "Хальмахера"},
    {id: 22, seaName: "Яванское"},
    {id: 23, seaName: "Гебридское"},
    {id: 24, seaName: "Кельтское"},
    {id: 25, seaName: "Ирмингера"},
    {id: 26, seaName: "Северное"},
    {id: 27, seaName: "Ваттовое"},
    {id: 28, seaName: "Альборан"},
    {id: 29, seaName: "Балеарское"},
    {id: 30, seaName: "Левантийское"},
    {id: 31, seaName: "Лигурийскоe"},
    {id: 32, seaName: "Тирренское"},
    {id: 33, seaName: "Икарийское"},
    {id: 34, seaName: "Миртойское"},
    {id: 35, seaName: "Фракийсое"},
    {id: 36, seaName: "Андамандское"},
    {id: 37, seaName: "Аравийское"},
    {id: 38, seaName: "Арафурское"},
    {id: 39, seaName: "Лаккадивское"},
    {id: 40, seaName: "Тиморское"},
    {id: 41, seaName: "Амудсена"},
    {id: 42, seaName: "Росса"},
    {id: 43, seaName: "Уэделла"},
    {id: 44, seaName: "Скоша"},
    {id: 45, seaName: "Лазарева"},
    {id: 46, seaName: "Дейвиса"},
    {id: 47, seaName: "Беллинсзаузена"},
    {id: 48, seaName: "Моусона"},
    {id: 49, seaName: "Рисер-Ларсена"},
    {id: 50, seaName: "Содружества"},
    {id: 51, seaName: "Космонавтов"},
    {id: 52, seaName: "Сомова"},
    {id: 53, seaName: "Дюрвиля"},
    {id: 54, seaName: "Баренцево"},
    {id: 55, seaName: "Печорское"},
    {id: 56, seaName: "Баффина"},
    {id: 57, seaName: "Белое"},
    {id: 58, seaName: "Бофорта"},
    {id: 59, seaName: "Ванделя"},
    {id: 60, seaName: "Восточно-Сибирское"},
    {id: 61, seaName: "Гренландское"},
    {id: 62, seaName: "Прица Густава-Адольфа"},
    {id: 63, seaName: "Карское"},
    {id: 64, seaName: "Лаптевых"},
    {id: 65, seaName: "Линкольна"},
    {id: 66, seaName: "Норвежское"},
    {id: 67, seaName: "Чукотское"},
  ];

  public getSeaName(): void {
    const seaInfo = this.seaInfos.find(si => si.id == this.chosenSeaId);
    if (!this.chosenSeaId || !seaInfo) {
      this.chosenSeaId = null;
      return;
    }
    this.chosenSeaName = this.chosenSeaId + " : " + seaInfo.seaName;
    this.chosenSeaId = null;
  }
}
