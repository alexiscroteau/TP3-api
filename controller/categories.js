import {
  ErrorCustomResponse,
  SuccessCustomResponse,
} from "../lib/customResponse";
import Category from "../model/category";

export function getCategories(req, res) {
  res.send(
    new SuccessCustomResponse(200, "Category list received.", Category.all())
  );
}
