 [![Build Status](https://secure.travis-ci.org/mochajs/mocha.png)](http://travis-ci.org/mochajs/mocha)

  [![Mocha test framework](http://f.cl.ly/items/3l1k0n2A1U3M1I1L210p/Screen%20Shot%202012-02-24%20at%202.21.43%20PM.png)](http://mochajs.org)

  Mocha is a simple, flexible, fun JavaScript test framework for node.js and the browser. For more information view the [documentation](http://mochajs.org).

Why do I fork mocha?

 Because mocha does not support multiple reporters at the same time, usually you have to run test case twice to get different report. So I extend Mocha.Runner for customization. Only one js file is added: "MochaRunnerExtend.js", please check it for your convenience.
 Thank you!
