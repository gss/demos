
## IDK

- @v |(&"zone2", &"zone1")| in(&);
  - scoping doesn't work, when stacked bind multiple instances..

## Compiler Bugs

- Unhelpful errors when ruleset missing closing brace

- -webkit-column-width: 400px;

- normal constraints after block:
      @v |-(#a1)-| {
             [x] == 1;
           }
           ::[x] == [z];
           
- not pretty error : 
(& .title)[margin-top]: == [md] / 2;

- pure numbers in complex expressions on one side don't work

  [foo] == 8 * 4; /* Works */
  [bar] == (8 * 4) - 1; /* Doesn't work */


## Engine Bugs

- include ::window vars used in engine.values

- reboot, better destroy method

- Allow element to be modified w/o causing update pass
  ---> set flag or something

- @if statements with ::window[width] breaks things...
  - binding width to var still breaks, but not as bad

- external stylesheets, not loaded in correct order w/ respect to inline

- &"virtual"   ... virtuals scoped to this don't work the same when they should...

- .gss-ready added too early

- adding removing classes eventually breaks

- how to go back one level to get, especially for virtuals!!

    .post-1"zone1" = &"zone1";
    .post-1[x] == &[x];

- 2d sugar not working as expected:

  aside {
    size: == 360; /* Works */
    border-radius: == &[size] / 2; /* Doesn't work */
    border-radius: == &[width] / 2; /* Works */
  }

- Issue with intrinsics when loading custom fonts

  See sanity-checks/font-face-intrinsic-scroll/index.html



///

- vendor prefixing
- props like col-count
- intrinsics in condional branch
- css dumpin w/in conditionals

- clean & from css dumping

  .post {
    opacity: 0; // ok
    &.featured {
      opacity: 1; // broken
    }
  }
    
    