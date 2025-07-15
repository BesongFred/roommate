package main

import "gorm.io/gorm"

type Payment struct {
    gorm.Model
    UserID     string  // User making the payment
    Amount     float64 // Amount paid
    Provider   string  // "campay"
    Status     string  // "success", "failed"
    TxRef      string  // Transaction reference
}

type UnlockedChat struct {
    gorm.Model
    PayerID    string // who paid
    ReceiverID string // who they unlocked chat with
    PaymentID  uint   // reference to payment
}
