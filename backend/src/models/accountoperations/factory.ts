import Model from "./model";
import accounts from "./mysql";

export default function getModel(): Model {
    return accounts;
}