import { Beer } from "../src/Beer";
import { MessageDataFile } from "../src/MessageDataFile";
import { Order } from "../src/Order";
import { Water } from "../src/Water";
import { Whisky } from "../src/Whisky";

test("Deve criar um pedido e calcular o total", () => {
  // given
  const order = new Order(new MessageDataFile());

  order.addItem(new Beer("Brahma", 10));
  order.addItem(new Whisky("Jack Daniels", 100));
  order.addItem(new Water("Crystal", 1));

  // when
  const total = order.getTotal();

  // then
  expect(total).toBe(111);
});

test("Deve criar um pedido e calcular os impostos", () => {
  // given
  const order = new Order(new MessageDataFile());

  order.addItem(new Beer("Brahma", 10));
  order.addItem(new Whisky("Jack Daniels", 100));
  order.addItem(new Water("Crystal", 1));

  // when
  const taxes = order.getTaxes();

  // then
  expect(taxes).toBe(21);
});

test("Deve criar um pedido e imprimir uma mensagem em português", async function () {
  // given
  const order = new Order(new MessageDataFile());

  order.addItem(new Beer("Brahma", 10));
  order.addItem(new Whisky("Jack Daniels", 100));
  order.addItem(new Water("Crystal", 1));

  // when
  const message = await order.printMessage("pt");

  // then
  expect(message).toBe(
    "O total foi de R$111, os impostos foram R$21. Obrigado pelo seu pedido!"
  );
});

test("Deve criar um pedido e imprimir uma mensagem em inglês", async function () {
  // given
  const order = new Order(new MessageDataFile());

  order.addItem(new Beer("Brahma", 10));
  order.addItem(new Whisky("Jack Daniels", 100));
  order.addItem(new Water("Crystal", 1));

  // when
  const message = await order.printMessage("en");

  // then
  expect(message).toBe(
    "The total was R$111, the taxes was R$21. Thanks for your order!"
  );
});
