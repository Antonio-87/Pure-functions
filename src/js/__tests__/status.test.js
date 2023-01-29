import healthStatus from '../app';

test.each([
  { data: { name: 'Маг', health: '100' }, expected: 'healthy' },
  { data: { name: 'Мечник', health: '30' }, expected: 'wounded' },
  { data: { name: 'Лучник', health: '10' }, expected: 'critical' },
])('health status %s', ({ data, expected }) => {
  expect(healthStatus(data)).toBe(expected);
});
