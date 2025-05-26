import test from 'ava';
import nameArrayCapping from '../src/name_array_capping';

test("should return array of capitalized names if lowercase are given", function() {
  t.is(nameArrayCapping(['johnny']), ['Johnny']);                               
});

it ("should return an array of capitalized names if uppercase strings are given", function() {
  t.is(nameArrayCapping(['RALPH', 'GEORGIA', 'CHRISTINA']), ['Ralph', 'Georgia', 'Christina']);
});
