import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AccountService } from '../services/account-service';
import { ToastService } from '../services/toast-service';

export const authGuard: CanActivateFn = (route, state) => {
  const accountService: AccountService = inject(AccountService);
  const toastService: ToastService = inject(ToastService);

  // 检查用户是否已经登录了
  if (accountService.currentUser() == null) {
    toastService.error('You must be logged in to access this page.');
    return false;
  }

  return true;
};
