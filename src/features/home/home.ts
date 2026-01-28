/*
 * @Author: Leo lyx776239423@gmail.com
 * @Date: 2026-01-21 15:50:52
 * @LastEditors: Leo lyx776239423@gmail.com
 * @LastEditTime: 2026-01-22 23:53:17
 * @FilePath: \dating-app-client\src\features\home\home.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Component, Input, input, signal } from '@angular/core';
import { Register } from "../account/register/register";
import { User } from '../../types/user';

@Component({
  selector: 'app-home',
  imports: [Register],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected registerMode = signal(false);

  @Input({ required: true }) userFromApp: User[] = [];

  showRegister(value: boolean) {
    this.registerMode.set(value);
  }
}
