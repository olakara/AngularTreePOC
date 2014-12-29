## Synopsis

An attempt to get the [angular-tree-control](https://github.com/wix/angular-tree-control) running in RTL.

## What the code should be:

Making use of the existing directive, developers should be able to do something like this:
```
<treecontrol dir="rtl" class="tree-classic" tree-model="data" options="options"
on-selection="onNodeSelection(node)">
{{node.label}}
</treecontrol>
```

## License

The MIT License.

See [LICENSE](https://github.com/wix/angular-tree-control/blob/master/LICENSE)
