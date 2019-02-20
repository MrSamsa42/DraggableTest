# DraggableTest

This is a simple app put together to test the functionality of the react-native-draggable-grid library, https://github.com/SHISME/react-native-draggable-grid

Dragging and dropping works as expected, and tiles can be deleted in order, starting from the last element.  Upon removing a tile from
the beginning or middle of the grid, the grid restructures as expected.  However, subsequent deletions fail and crash the app.  The issue
has been raised with the developer -- See https://github.com/SHISME/react-native-draggable-grid/issues/3
