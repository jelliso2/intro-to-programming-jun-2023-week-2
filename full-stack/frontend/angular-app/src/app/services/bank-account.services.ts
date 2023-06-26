import { Injectable, effect, signal } from "@angular/core";
import { BonusCalculator } from "./bonus-calculator.services";


@Injectable({ providedIn: 'root' })
export class BankAccount {



    private balance = signal(0);

    constructor(private bonusCalcualtor: BonusCalculator) {
        let savedBalance = localStorage.getItem('balance');
        if (savedBalance != null) {
            this.balance.set(parseFloat(savedBalance))
        }
        effect(() => {
            localStorage.setItem('balance', this.balance().toString())
        })
    }


    getBalance() {
        return this.balance.asReadonly();
    }




    makeDeposit(amount: number) {
        // send it to an API,
        // calculate a bonus
        let bonus = this.bonusCalcualtor.calculateBonusForDepositOn(this.balance(), amount)
        this.balance.set(this.balance() + amount + bonus);
    }



    makeWithdrawal(amount: number) {
        this.balance.set(this.balance() - amount);
    }
}