
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

## Engine Bugs

- Allow element to be modified w/o causing update pass

- @if statements with ::window[width] breaks things...
  - binding width to var still breaks, but not as bad

- external stylesheets, not loaded in correct order w/ respect to inline

- &"virtual"   ... virtuals scoped to this don't work the same when they should...

- .gss-ready added too early

- adding removing classes eventually breaks

- how to go back one level to get, especially for virtuals!!

    .post-1"zone1" = &"zone1";
    .post-1[x] == &[x];



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
    
    