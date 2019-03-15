# Employees list kata 

This kata comes from [this post by Thomas Mayrhofer](https://dev.to/webpapaya/writing-better-test-assertions-lml). He asked for feedback at Software Crafters Slack and I created this small project to show my comments.

I think it's a good post to know methods from `hamjest`. 

However, I detected some smells:

* 18 didn't appear in the tests
* The workflow: the method `listEmployees` was getting more responsibilities, new tests were added and old tests failed
* Too much logic in the assertions
* The need of the last test: previous tests didn't have accurate assertions

What things I try to get with this example:

* Communication
* The workflow with a change in requirements:
    * One test changes (only one)
    * A new unit test is added

TO DO: using the last features of JS.
