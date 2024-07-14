import { NextFunction, Request, Response } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import config from "config";
import createHttpError, { Unauthorized } from "http-errors";
import getModel from "../../models/accountoperations/factory";

export const getAllByAccount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const account = await getModel().getAllByAccount(+req.params.accountNumber);
    res.json((account));
  } catch (err) {
    next(err);
  }
};



  export const add = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newAccount = await getModel().add(req.body);
        res.status(StatusCodes.CREATED).json(newAccount);
    } catch (err) {
        next(err)
    }
}



