Angular provides two ways for Change Detection Strategies, the default, and onPush. 

ChangeDetectionStrategy.Default :- By default angular will check every time if something has been changed, it may be a property change or object change. 

ChangeDetectionStrategy.onPush :- onPush strategy on the component will perform a check for change of Input reference type, If there is a change in the property then it will not be triggered. In POC I have implemented it.

Created two button change First Name and change Full name, onclick of change first name only object property is changed. onclick of change full name => object reference is changed. 

So If I'm using ChangeDetectionStrategy.Default  both onclick function will work, but If I'm using ChangeDetectionStrategy.onPush only change full name button will work because I'm changing the reference. 
