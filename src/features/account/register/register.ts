import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterCreds, User } from '../../../types/user';
import { AccountService } from '../../../core/services/account-service';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  protected accountService = inject(AccountService);

  // 创建一个对象用于接收表单中的数据
  protected creds = {} as RegisterCreds;

  userFromHome = input.required<User[]>();

  showRegister = output<boolean>();

  onSubmit() {
    console.log('注册表单数据:', this.creds);
    this.accountService.register(this.creds).subscribe({
      next: (resp) => {
        console.log('注册成功:', resp);
        // 关闭注册表单
        this.showRegister.emit(false);
      },
      error: (err) => console.log('注册失败:', err),
    });
  }

  onCancel() {
    console.log('注册取消');

    this.showRegister.emit(false);
  }
}
