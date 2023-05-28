import json from '../parser';
import read from '../reader';

test('Проверка работы функции parser', async (done) => {
  const data = await read();
  expect(data.byteLength).toBe(180);
  done();
});

test('Проверка работы функции json', async (done) => {
  const result = await read().then((data) => json(data));
  expect(result).toBe(
    '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}',
  );
  done();
});
