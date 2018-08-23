const test = require('tape')
import { apple } from "./apples";

'use strict'

test ('testing apple object', t =>{
  t.equal(apple.getApple(), 'apple2', 'getapple method returns with apple');
  t.notEqual (apple.getApple(), '', 'getapple method not returns empty' );
  t.end()
}
)
