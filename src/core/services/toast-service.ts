import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

// <div class="toast toast-end">
//   <div class="alert alert-info">
//     <span>New mail arrived.</span>
//   </div>
//   <div class="alert alert-success">
//     <span>Message sent successfully.</span>
//   </div>
// </div>
export class ToastService {
  constructor() {
    this.createToastContainer();
  }

  // 创建一个toast的容器 不需要返回值
  private createToastContainer(): void {
    // 判断容器是否已经存在
    if (!document.getElementById('toast-container')) {
      const container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast toast-bottom toast-end';
      document.body.appendChild(container);
    }
  }

  private createToastElement(message: string, alertClass: string, duration: number): void {
    // 判断容器是否存在
    const container = document.getElementById('toast-container');
    if (!container) return;

    // 创建toast元素本身
    const toast = document.createElement('div');
    toast.className = `alert ${alertClass} shadow-lg`;

    // 设置span部分
    toast.innerHTML = `
      <span>${message}</span>
      <button class="btn btn-sm btn-ghost ml-2" onclick="this.parentElement.remove()">✕</button>
    `;

    // 将toast添加到容器中
    container.appendChild(toast);

    // 设置消失时间
    setTimeout(() => {
      container.removeChild(toast);
    }, duration);
  }

  success(message: string, duration: number = 5000): void {
    this.createToastElement(message, 'alert-success', duration);
  }

  error(message: string, duration: number = 5000): void {
    this.createToastElement(message, 'alert-error', duration);
  }

  warning(message: string, duration: number = 5000): void {
    this.createToastElement(message, 'alert-warning', duration);
  }

  info(message: string, duration: number = 5000): void {
    this.createToastElement(message, 'alert-info', duration);
  }
}
