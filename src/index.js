module.exports = function solveEquation(equation) {
      function compareNumeric(a, b) {
      return a - b;
      }

    var q = equation.split(' ');
    var s = [];
    var d;

      for (var i = 0; i< q.length; i++) {
        if (isNaN(q[i])) {
          if (q[i]!='+' && q[i]!='-'){
          q.splice(i--, 1);
          } else {
            q[i+1] = q[i] + q[i+1];
            q.splice(i--, 1);
          }
        }
    }

  d = q[1]*q[1] - 4*q[0]*q[2]
  s[0] = ((-q[1]+Math.sqrt(d))/(2*q[0])).toFixed(5);
  s[1] = ((-q[1]-Math.sqrt(d))/(2*q[0])).toFixed(5);
  s.sort(compareNumeric);
  return s;
}
