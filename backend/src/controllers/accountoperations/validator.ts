import Joi from "joi";
import DTO from "../../models/accountoperations/dto";

export const accountValidator = Joi.object<DTO>({
  // objectId: Joi.number().positive().required(),
  accountNumber: Joi.number().positive().required(),
  types: Joi.string().valid("Deposit", "Withdrawl", "Loan").required(),
  price: Joi.number().min(1).max(9999.99).required(),
  date: Joi.date().required(),
  interest: Joi.number().min(1).max(9999.99),
  amountOfPayments: Joi.number().min(1).max(9999),
  dateOfLoan: Joi.date(),
});
