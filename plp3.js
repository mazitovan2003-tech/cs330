//PLP 3 — JavaScript control flow & boolean logic

//1) One-condition if/else
 
function oneConditionIfElse(x) {
  // In JS, any expression is coerced to a boolean in an if(...)
  if (x === true) {                           // explicit boolean check
    console.log('[oneConditionIfElse] x is exactly true');
  } else {
    console.log('[oneConditionIfElse] x is NOT exactly true');
  }
}
oneConditionIfElse(true);
oneConditionIfElse(1);     // not strictly true
console.log('');


 // 2) Multi-condition if/else (&& and ||)
 
function multiConditionIfElse(x, y) {
  if (x > 0 && y < 10) {
    console.log(`[multiConditionIfElse] x=${x}, y=${y} -> BOTH conditions true`);
  } else if (x > 0 || y < 10) {
    console.log(`[multiConditionIfElse] x=${x}, y=${y} -> AT LEAST one condition true`);
  } else {
    console.log(`[multiConditionIfElse] x=${x}, y=${y} -> Neither condition true`);
  }
}
multiConditionIfElse(2, 5);
multiConditionIfElse(-1, 8);
multiConditionIfElse(-1, 11);
console.log('');


 //3) if / else if / else chain
 
function gradeLetter(score) {
  if (score >= 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}
console.log('[gradeLetter] 94 ->', gradeLetter(94));
console.log('[gradeLetter] 81 ->', gradeLetter(81));
console.log('[gradeLetter] 59 ->', gradeLetter(59));
console.log('');


 //4) Short-circuit logic
 
function logAndReturn(label, value) {
  console.log(`  called ${label}() ->`, value);
  return value;
}

console.log('[short-circuit] AND (&&) only calls second function if first is truthy:');
const andResult1 = logAndReturn('lhsTrue', true) && logAndReturn('rhs', 'RHS evaluated');
console.log('  result:', andResult1);
const andResult2 = logAndReturn('lhsFalse', false) && logAndReturn('rhsNEVER', 'should not print');
console.log('  result:', andResult2, '\n');

console.log('[short-circuit] OR (||) only calls second function if first is falsy:');
const orResult1 = logAndReturn('lhsTruthy', 'left') || logAndReturn('rhsNEVER', 'should not print');
console.log('  result:', orResult1);
const orResult2 = logAndReturn('lhsFalsy', 0) || logAndReturn('rhs', 'right value');
console.log('  result:', orResult2, '\n');

console.log('[short-circuit] Nullish coalescing (??) only uses RHS if LHS is null or undefined:');
const a = null ?? 'fallback';
const b = 0 ?? 'fallback'; // 0 is NOT nullish, so 0 is kept
console.log('  null ?? "fallback" ->', a);
console.log('  0 ?? "fallback" ->', b, '\n');

console.log('[short-circuit] Optional chaining (?.) stops if the part before ?. is nullish:');
const user = { profile: { name: 'Ada' } };
const safe1 = user.profile?.name;     // 'Ada'
const safe2 = user.account?.id;       // undefined, no throw
console.log('  user.profile?.name ->', safe1);
console.log('  user.account?.id ->', safe2, '\n');

console.log('[short-circuit] WARNING: Bitwise operators (&, |) do NOT short-circuit:');
function sideEffect(tag) { console.log(`  sideEffect(${tag})`); return 1; }
const bitwise = sideEffect('left') & sideEffect('right'); // both always run
console.log('  bitwise result:', bitwise, '\n');


 //5) switch...case (with break / fall-through)
 
function dayType(day) {
  switch (day) {
    case 'Sat':
    case 'Sun':
      // fall-through from 'Sat' to 'Sun'
      return 'weekend';                // break is unnecessary because return exits
    case 'Mon':
      return 'start of week';
    default:
      return 'weekday';
  }
}
console.log('[dayType] Sun ->', dayType('Sun'));
console.log('[dayType] Tue ->', dayType('Tue'));
console.log('[dayType] Mon ->', dayType('Mon'));
console.log('');

/* Demonstrate explicit fall-through (intentional) */
function classify(n) {
  let label = '';
  switch (true) {
    case n < 0:
      label += 'negative; ';
      // fall-through on purpose (no break)
    case Number.isInteger(n) && Math.abs(n) < 10:
      label += 'single-digit; ';
      break;
    default:
      label += 'other; ';
  }
  return label.trim();
}
console.log('[classify] -3 ->', classify(-3));
console.log('[classify] 12 ->', classify(12));
console.log('');

/* 
 * 6) Dangling-else discussion
 * In JavaScript, the `else` pairs with the nearest unmatched `if`.
 * Use braces to make intent explicit.
 */
function danglingElseDemo(x, y) {
  if (x)
    if (y) console.log('  matched inner if');
    else console.log('  else binds to inner if, not outer'); // pairs with "if (y)"
  // Better:
  if (x) {
    if (y) {
      console.log('  [clear] matched inner if');
    } else {
      console.log('  [clear] else binds to inner if');
    }
  }
}
console.log('[danglingElseDemo]');
danglingElseDemo(true, false);
console.log('');

/* 
 * 7) Loop types: while, do...while, for, for...of, for...in
 */
console.log('[loops] while:');
let i = 0;
while (i < 3) {
  console.log('  i =', i);
  i++;
}

console.log('[loops] do...while (runs at least once):');
let j = 0;
do {
  console.log('  j =', j);
  j++;
} while (j < 2);

console.log('[loops] classic for:');
for (let k = 0; k < 3; k++) {
  console.log('  k =', k);
}

console.log('[loops] for...of (values of iterable):');
for (const v of ['a', 'b', 'c']) {
  console.log('  value =', v);
}

console.log('[loops] for...in (keys of object):');
const obj = { a: 1, b: 2 };
for (const key in obj) {
  // always guard for inherited properties in real code if needed
  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    console.log(`  ${key} -> ${obj[key]}`);
  }
}
console.log('');

/* 
 8) Scope of loop variables vs function blocks (var vs let/const)
  */
console.log('[scope] var is function-scoped; let/const are block-scoped:');
for (var m = 0; m < 2; m++) { /* empty */ }
console.log('  after for(var m...) m =', m); // accessible here

for (let n = 0; n < 2; n++) { /* empty */ }
// console.log(n); // ReferenceError if uncommented: n is block-scoped

{
  var v1 = 'var-in-block';   // leaks out of block
  let v2 = 'let-in-block';   // block-scoped
  const v3 = 'const-in-block'; // block-scoped
}
console.log('  v1 exists outside block ->', v1);
// console.log(v2, v3); // ReferenceError if uncommented

console.log('\n=== End of PLP 3 demo ===');
