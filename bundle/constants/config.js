Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint max-len: ["error", { "ignoreStrings": true }] */

exports.default = {
  dock: {
    type: 'object',
    title: 'Dock',
    properties: {
      position: {
        title: 'Position',
        description: 'In which dock to position `project-viewer-plus`.',
        type: 'string',
        default: 'right',
        enum: ['left', 'right'],
        order: 1
      },
      isVisible: {
        title: 'Visible dock',
        description: 'If set to `true`, it will show the <em>dock</em> where `project-viewer-plus` is placed.<br><br><span class="pv-notice-warning">warning:</span><br>Keep in mind that this may/or will impact other <em>items</em> on the placed <em>dock</em>.',
        type: 'boolean',
        default: true,
        order: 2
      },
      isActive: {
        title: 'Activate dock',
        description: 'If set to `true`, it will make `project-viewer-plus` the visible <em>item</em> in the placed <em>dock</em>.<br><br><span class="pv-notice-warning">warning:</span><br>If <em>item</em> is positioned in the left <em>dock</em> it may hide the `tree-view` <em>item</em>.',
        type: 'boolean',
        default: true,
        order: 3
      },
      saveChanges: {
        title: 'Save Changes',
        description: 'If set to `true`, it will save all changes related to the position and visibility of the `project-viewer-plus`\'s <em>item</em> in the placed <em>dock</em>.',
        type: 'boolean',
        default: false,
        order: 4
      }
    },
    order: 1
  },
  packages: {
    title: 'Packages',
    type: 'object',
    properties: {
      treeView: {
        title: 'tree-view',
        description: 'Tick to disable messing with `tree-view` package.',
        type: 'boolean',
        default: false,
        order: 1
      },
      findAndReplace: {
        title: 'find-and-replace',
        description: 'Tick to disable messing with `find-and-replace` package.',
        type: 'boolean',
        default: false,
        order: 2
      },
      statusBar: {
        title: 'status-bar',
        description: 'Tick to disable messing with `status-bar` package.',
        type: 'boolean',
        default: false,
        order: 3
      },
      linter: {
        title: 'linter & linter-ui-default',
        description: 'Tick to disable messing with `linter` and `linter-ui-default` packages.',
        type: 'boolean',
        default: false,
        order: 4
      },
      github: {
        title: 'v',
        description: 'Tick to disable messing with `github` package.',
        type: 'boolean',
        default: false,
        order: 5
      }
    },
    order: 2
  }
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jb25zdGFudHMvY29uZmlnLmpzIl0sIm5hbWVzIjpbImRvY2siLCJ0eXBlIiwidGl0bGUiLCJwcm9wZXJ0aWVzIiwicG9zaXRpb24iLCJkZXNjcmlwdGlvbiIsImRlZmF1bHQiLCJlbnVtIiwib3JkZXIiLCJpc1Zpc2libGUiLCJpc0FjdGl2ZSIsInNhdmVDaGFuZ2VzIiwicGFja2FnZXMiLCJ0cmVlVmlldyIsImZpbmRBbmRSZXBsYWNlIiwic3RhdHVzQmFyIiwibGludGVyIiwiZ2l0aHViIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTs7a0JBRWU7QUFDYkEsUUFBTTtBQUNKQyxVQUFNLFFBREY7QUFFSkMsV0FBTyxNQUZIO0FBR0pDLGdCQUFZO0FBQ1ZDLGdCQUFVO0FBQ1JGLGVBQU8sVUFEQztBQUVSRyxxQkFBYSxrREFGTDtBQUdSSixjQUFNLFFBSEU7QUFJUkssaUJBQVMsT0FKRDtBQUtSQyxjQUFNLENBQ0osTUFESSxFQUVKLE9BRkksQ0FMRTtBQVNSQyxlQUFPO0FBVEMsT0FEQTtBQVlWQyxpQkFBVztBQUNUUCxlQUFPLGNBREU7QUFFVEcscUJBQWEsK09BRko7QUFHVEosY0FBTSxTQUhHO0FBSVRLLGlCQUFTLElBSkE7QUFLVEUsZUFBTztBQUxFLE9BWkQ7QUFtQlZFLGdCQUFVO0FBQ1JSLGVBQU8sZUFEQztBQUVSRyxxQkFBYSwyUUFGTDtBQUdSSixjQUFNLFNBSEU7QUFJUkssaUJBQVMsSUFKRDtBQUtSRSxlQUFPO0FBTEMsT0FuQkE7QUEwQlZHLG1CQUFhO0FBQ1hULGVBQU8sY0FESTtBQUVYRyxxQkFBYSw4SkFGRjtBQUdYSixjQUFNLFNBSEs7QUFJWEssaUJBQVMsS0FKRTtBQUtYRSxlQUFPO0FBTEk7QUExQkgsS0FIUjtBQXFDSkEsV0FBTztBQXJDSCxHQURPO0FBd0NiSSxZQUFVO0FBQ1JWLFdBQU8sVUFEQztBQUVSRCxVQUFNLFFBRkU7QUFHUkUsZ0JBQVk7QUFDVlUsZ0JBQVU7QUFDUlgsZUFBTyxXQURDO0FBRVJHLHFCQUFhLG1EQUZMO0FBR1JKLGNBQU0sU0FIRTtBQUlSSyxpQkFBUyxLQUpEO0FBS1JFLGVBQU87QUFMQyxPQURBO0FBUVZNLHNCQUFnQjtBQUNkWixlQUFPLGtCQURPO0FBRWRHLHFCQUFhLDBEQUZDO0FBR2RKLGNBQU0sU0FIUTtBQUlkSyxpQkFBUyxLQUpLO0FBS2RFLGVBQU87QUFMTyxPQVJOO0FBZVZPLGlCQUFXO0FBQ1RiLGVBQU8sWUFERTtBQUVURyxxQkFBYSxvREFGSjtBQUdUSixjQUFNLFNBSEc7QUFJVEssaUJBQVMsS0FKQTtBQUtURSxlQUFPO0FBTEUsT0FmRDtBQXNCVlEsY0FBUTtBQUNOZCxlQUFPLDRCQUREO0FBRU5HLHFCQUFhLHlFQUZQO0FBR05KLGNBQU0sU0FIQTtBQUlOSyxpQkFBUyxLQUpIO0FBS05FLGVBQU87QUFMRCxPQXRCRTtBQTZCVlMsY0FBUTtBQUNOZixlQUFPLEdBREQ7QUFFTkcscUJBQWEsZ0RBRlA7QUFHTkosY0FBTSxTQUhBO0FBSU5LLGlCQUFTLEtBSkg7QUFLTkUsZUFBTztBQUxEO0FBN0JFLEtBSEo7QUF3Q1JBLFdBQU87QUF4Q0M7QUF4Q0csQyIsImZpbGUiOiJjb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbWF4LWxlbjogW1wiZXJyb3JcIiwgeyBcImlnbm9yZVN0cmluZ3NcIjogdHJ1ZSB9XSAqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRvY2s6IHtcbiAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICB0aXRsZTogJ0RvY2snLFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgIHRpdGxlOiAnUG9zaXRpb24nLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0luIHdoaWNoIGRvY2sgdG8gcG9zaXRpb24gYHByb2plY3Qtdmlld2VyLXBsdXNgLicsXG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICBkZWZhdWx0OiAncmlnaHQnLFxuICAgICAgICBlbnVtOiBbXG4gICAgICAgICAgJ2xlZnQnLFxuICAgICAgICAgICdyaWdodCdcbiAgICAgICAgXSxcbiAgICAgICAgb3JkZXI6IDFcbiAgICAgIH0sXG4gICAgICBpc1Zpc2libGU6IHtcbiAgICAgICAgdGl0bGU6ICdWaXNpYmxlIGRvY2snLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0lmIHNldCB0byBgdHJ1ZWAsIGl0IHdpbGwgc2hvdyB0aGUgPGVtPmRvY2s8L2VtPiB3aGVyZSBgcHJvamVjdC12aWV3ZXItcGx1c2AgaXMgcGxhY2VkLjxicj48YnI+PHNwYW4gY2xhc3M9XCJwdi1ub3RpY2Utd2FybmluZ1wiPndhcm5pbmc6PC9zcGFuPjxicj5LZWVwIGluIG1pbmQgdGhhdCB0aGlzIG1heS9vciB3aWxsIGltcGFjdCBvdGhlciA8ZW0+aXRlbXM8L2VtPiBvbiB0aGUgcGxhY2VkIDxlbT5kb2NrPC9lbT4uJyxcbiAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICBkZWZhdWx0OiB0cnVlLFxuICAgICAgICBvcmRlcjogMlxuICAgICAgfSxcbiAgICAgIGlzQWN0aXZlOiB7XG4gICAgICAgIHRpdGxlOiAnQWN0aXZhdGUgZG9jaycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnSWYgc2V0IHRvIGB0cnVlYCwgaXQgd2lsbCBtYWtlIGBwcm9qZWN0LXZpZXdlci1wbHVzYCB0aGUgdmlzaWJsZSA8ZW0+aXRlbTwvZW0+IGluIHRoZSBwbGFjZWQgPGVtPmRvY2s8L2VtPi48YnI+PGJyPjxzcGFuIGNsYXNzPVwicHYtbm90aWNlLXdhcm5pbmdcIj53YXJuaW5nOjwvc3Bhbj48YnI+SWYgPGVtPml0ZW08L2VtPiBpcyBwb3NpdGlvbmVkIGluIHRoZSBsZWZ0IDxlbT5kb2NrPC9lbT4gaXQgbWF5IGhpZGUgdGhlIGB0cmVlLXZpZXdgIDxlbT5pdGVtPC9lbT4uJyxcbiAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICBkZWZhdWx0OiB0cnVlLFxuICAgICAgICBvcmRlcjogM1xuICAgICAgfSxcbiAgICAgIHNhdmVDaGFuZ2VzOiB7XG4gICAgICAgIHRpdGxlOiAnU2F2ZSBDaGFuZ2VzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdJZiBzZXQgdG8gYHRydWVgLCBpdCB3aWxsIHNhdmUgYWxsIGNoYW5nZXMgcmVsYXRlZCB0byB0aGUgcG9zaXRpb24gYW5kIHZpc2liaWxpdHkgb2YgdGhlIGBwcm9qZWN0LXZpZXdlci1wbHVzYFxcJ3MgPGVtPml0ZW08L2VtPiBpbiB0aGUgcGxhY2VkIDxlbT5kb2NrPC9lbT4uJyxcbiAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgb3JkZXI6IDRcbiAgICAgIH1cbiAgICB9LFxuICAgIG9yZGVyOiAxXG4gIH0sXG4gIHBhY2thZ2VzOiB7XG4gICAgdGl0bGU6ICdQYWNrYWdlcycsXG4gICAgdHlwZTogJ29iamVjdCcsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgdHJlZVZpZXc6IHtcbiAgICAgICAgdGl0bGU6ICd0cmVlLXZpZXcnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RpY2sgdG8gZGlzYWJsZSBtZXNzaW5nIHdpdGggYHRyZWUtdmlld2AgcGFja2FnZS4nLFxuICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICBvcmRlcjogMVxuICAgICAgfSxcbiAgICAgIGZpbmRBbmRSZXBsYWNlOiB7XG4gICAgICAgIHRpdGxlOiAnZmluZC1hbmQtcmVwbGFjZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGljayB0byBkaXNhYmxlIG1lc3Npbmcgd2l0aCBgZmluZC1hbmQtcmVwbGFjZWAgcGFja2FnZS4nLFxuICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICBvcmRlcjogMlxuICAgICAgfSxcbiAgICAgIHN0YXR1c0Jhcjoge1xuICAgICAgICB0aXRsZTogJ3N0YXR1cy1iYXInLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RpY2sgdG8gZGlzYWJsZSBtZXNzaW5nIHdpdGggYHN0YXR1cy1iYXJgIHBhY2thZ2UuJyxcbiAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgb3JkZXI6IDNcbiAgICAgIH0sXG4gICAgICBsaW50ZXI6IHtcbiAgICAgICAgdGl0bGU6ICdsaW50ZXIgJiBsaW50ZXItdWktZGVmYXVsdCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGljayB0byBkaXNhYmxlIG1lc3Npbmcgd2l0aCBgbGludGVyYCBhbmQgYGxpbnRlci11aS1kZWZhdWx0YCBwYWNrYWdlcy4nLFxuICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICBvcmRlcjogNFxuICAgICAgfSxcbiAgICAgIGdpdGh1Yjoge1xuICAgICAgICB0aXRsZTogJ3YnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RpY2sgdG8gZGlzYWJsZSBtZXNzaW5nIHdpdGggYGdpdGh1YmAgcGFja2FnZS4nLFxuICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICBvcmRlcjogNVxuICAgICAgfVxuICAgIH0sXG4gICAgb3JkZXI6IDJcbiAgfVxufTtcbiJdfQ==