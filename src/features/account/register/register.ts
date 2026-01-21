import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterCreds } from '../../../types/user';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  // 创建一个对象用于接收表单中的数据
  protected creds = {} as RegisterCreds;

  onSubmit() {
    console.log("注册表单数据:", this.creds);
  }

  onCancel() {
    console.log("注册取消");
  }
}
