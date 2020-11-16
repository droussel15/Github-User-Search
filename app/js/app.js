"use strict";

new autoComplete({
    data: { // Data src [Array, Function, Async] | (REQUIRED)
        src: async function src() {
            // API key token
            var token = "this_is_the_API_token_number";
            // User search query
            var query = document.querySelector("#autoComplete").value;
            // Fetch External Data Source
            var source = await fetch("https://api.github.com/search/users?q=" + query + "+in:user");
            // Format data into JSON
            var data = await source.json();
            // Return Fetched data
            return data.items;
        },
        key: ['login'],
        cache: false
    },

    sort: function sort(a, b) {
        // Sort rendered results ascendingly | (Optional)
        if (a.match < b.match) return -1;
        if (a.match > b.match) return 1;
        return 0;
    },
    placeHolder: "Search users", // Place Holder text                 | (Optional)
    selector: "#autoComplete", // Input field selector              | (Optional)
    threshold: 3, // Min. Chars length to start Engine | (Optional)
    debounce: 300, // Post duration for engine to start | (Optional)
    searchEngine: "strict", // Search Engine type/mode           | (Optional)
    resultsList: { // Rendered results list object      | (Optional)
        render: true,
        /* if set to false, add an eventListener to the selector for event type
           "autoComplete" to handle the result */
        container: function container(source) {
            source.setAttribute("id", "results");
        },
        destination: document.querySelector("#autoComplete"),
        position: "afterend",
        element: "ul"
    },
    maxResults: 5, // Max. number of rendered results | (Optional)
    highlight: true, // Highlight matching results      | (Optional)
    resultItem: { // Rendered result item            | (Optional)
        content: function content(data, source) {
            source.innerHTML = '<a href="' + data.value.html_url + '">' + data.match + '</a>';
        },
        element: "li"
    },
    noResults: function noResults() {
        // Action script on noResults      | (Optional)
        var result = document.createElement("li");
        result.setAttribute("class", "no_result");
        result.setAttribute("tabindex", "1");
        result.innerHTML = "No Results";
        document.querySelector("#results").appendChild(result);
    },
    onSelection: function onSelection(feedback) {
        // Action script onSelection event | (Optional)
        window.open(feedback.selection.value.html_url);
    }
});
'use strict';

$(function () {
  // Prevent default submission
  $('#autoComplete').submit(function (event) {
    event.preventDefault();
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjAxX2F1dG9jb21wbGV0ZS5qcyIsIm1haW4uanMiXSwibmFtZXMiOlsiYXV0b0NvbXBsZXRlIiwiZGF0YSIsInNyYyIsInRva2VuIiwicXVlcnkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsInNvdXJjZSIsImZldGNoIiwianNvbiIsIml0ZW1zIiwia2V5IiwiY2FjaGUiLCJzb3J0IiwiYSIsImIiLCJtYXRjaCIsInBsYWNlSG9sZGVyIiwic2VsZWN0b3IiLCJ0aHJlc2hvbGQiLCJkZWJvdW5jZSIsInNlYXJjaEVuZ2luZSIsInJlc3VsdHNMaXN0IiwicmVuZGVyIiwiY29udGFpbmVyIiwic2V0QXR0cmlidXRlIiwiZGVzdGluYXRpb24iLCJwb3NpdGlvbiIsImVsZW1lbnQiLCJtYXhSZXN1bHRzIiwiaGlnaGxpZ2h0IiwicmVzdWx0SXRlbSIsImNvbnRlbnQiLCJpbm5lckhUTUwiLCJodG1sX3VybCIsIm5vUmVzdWx0cyIsInJlc3VsdCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsIm9uU2VsZWN0aW9uIiwid2luZG93Iiwib3BlbiIsImZlZWRiYWNrIiwic2VsZWN0aW9uIiwiJCIsInN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsWUFBSixDQUFpQjtBQUNiQyxVQUFNLEVBQStCO0FBQ25DQyxhQUFLLHFCQUFZO0FBQ2Y7QUFDQSxnQkFBTUMsUUFBUSw4QkFBZDtBQUNBO0FBQ0EsZ0JBQU1DLFFBQVFDLFNBQVNDLGFBQVQsQ0FBdUIsZUFBdkIsRUFBd0NDLEtBQXREO0FBQ0E7QUFDQSxnQkFBTUMsU0FBUyxNQUFNQyxpREFBK0NMLEtBQS9DLGNBQXJCO0FBQ0E7QUFDQSxnQkFBTUgsT0FBTyxNQUFNTyxPQUFPRSxJQUFQLEVBQW5CO0FBQ0E7QUFDQSxtQkFBT1QsS0FBS1UsS0FBWjtBQUNELFNBWkc7QUFhSkMsYUFBSyxDQUFDLE9BQUQsQ0FiRDtBQWNKQyxlQUFPO0FBZEgsS0FETzs7QUFrQmJDLFVBQU0sY0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFBcUI7QUFDakMsWUFBSUQsRUFBRUUsS0FBRixHQUFVRCxFQUFFQyxLQUFoQixFQUF1QixPQUFPLENBQUMsQ0FBUjtBQUN2QixZQUFJRixFQUFFRSxLQUFGLEdBQVVELEVBQUVDLEtBQWhCLEVBQXVCLE9BQU8sQ0FBUDtBQUN2QixlQUFPLENBQVA7QUFDSCxLQXRCWTtBQXVCYkMsaUJBQWEsY0F2QkEsRUF1QndCO0FBQ3JDQyxjQUFVLGVBeEJHLEVBd0J3QjtBQUNyQ0MsZUFBVyxDQXpCRSxFQXlCd0I7QUFDckNDLGNBQVUsR0ExQkcsRUEwQndCO0FBQ3JDQyxrQkFBYyxRQTNCRCxFQTJCd0I7QUFDckNDLGlCQUFhLEVBQXdCO0FBQ2pDQyxnQkFBUSxJQURDO0FBRVQ7O0FBRUFDLG1CQUFXLDJCQUFVO0FBQ2pCakIsbUJBQU9rQixZQUFQLENBQW9CLElBQXBCLEVBQTBCLFNBQTFCO0FBQ0gsU0FOUTtBQU9UQyxxQkFBYXRCLFNBQVNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FQSjtBQVFUc0Isa0JBQVUsVUFSRDtBQVNUQyxpQkFBUztBQVRBLEtBNUJBO0FBdUNiQyxnQkFBWSxDQXZDQyxFQXVDMEI7QUFDdkNDLGVBQVcsSUF4Q0UsRUF3QzBCO0FBQ3ZDQyxnQkFBWSxFQUEyQjtBQUNuQ0MsaUJBQVMsaUJBQUNoQyxJQUFELEVBQU9PLE1BQVAsRUFBa0I7QUFDdkJBLG1CQUFPMEIsU0FBUCxHQUFtQixjQUFjakMsS0FBS00sS0FBTCxDQUFXNEIsUUFBekIsR0FBb0MsSUFBcEMsR0FBMkNsQyxLQUFLZ0IsS0FBaEQsR0FBd0QsTUFBM0U7QUFDSCxTQUhPO0FBSVJZLGlCQUFTO0FBSkQsS0F6Q0M7QUErQ2JPLGVBQVcscUJBQU07QUFBc0I7QUFDbkMsWUFBTUMsU0FBU2hDLFNBQVNpQyxhQUFULENBQXVCLElBQXZCLENBQWY7QUFDQUQsZUFBT1gsWUFBUCxDQUFvQixPQUFwQixFQUE2QixXQUE3QjtBQUNBVyxlQUFPWCxZQUFQLENBQW9CLFVBQXBCLEVBQWdDLEdBQWhDO0FBQ0FXLGVBQU9ILFNBQVAsR0FBbUIsWUFBbkI7QUFDQTdCLGlCQUFTQyxhQUFULENBQXVCLFVBQXZCLEVBQW1DaUMsV0FBbkMsQ0FBK0NGLE1BQS9DO0FBQ0gsS0FyRFk7QUFzRGJHLGlCQUFhLCtCQUFZO0FBQWM7QUFDbkNDLGVBQU9DLElBQVAsQ0FBWUMsU0FBU0MsU0FBVCxDQUFtQnJDLEtBQW5CLENBQXlCNEIsUUFBckM7QUFDSDtBQXhEWSxDQUFqQjs7O0FDQUFVLEVBQUUsWUFBVTtBQUNWO0FBQ0FBLElBQUUsZUFBRixFQUFtQkMsTUFBbkIsQ0FBMEIsVUFBVUMsS0FBVixFQUFpQjtBQUN6Q0EsVUFBTUMsY0FBTjtBQUNELEdBRkQ7QUFHRCxDQUxEIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm5ldyBhdXRvQ29tcGxldGUoe1xuICAgIGRhdGE6IHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEYXRhIHNyYyBbQXJyYXksIEZ1bmN0aW9uLCBBc3luY10gfCAoUkVRVUlSRUQpXG4gICAgICBzcmM6IGFzeW5jICgpID0+IHtcbiAgICAgICAgLy8gQVBJIGtleSB0b2tlblxuICAgICAgICBjb25zdCB0b2tlbiA9IFwidGhpc19pc190aGVfQVBJX3Rva2VuX251bWJlclwiO1xuICAgICAgICAvLyBVc2VyIHNlYXJjaCBxdWVyeVxuICAgICAgICBjb25zdCBxdWVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXV0b0NvbXBsZXRlXCIpLnZhbHVlO1xuICAgICAgICAvLyBGZXRjaCBFeHRlcm5hbCBEYXRhIFNvdXJjZVxuICAgICAgICBjb25zdCBzb3VyY2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9zZWFyY2gvdXNlcnM/cT0ke3F1ZXJ5fStpbjp1c2VyYCk7XG4gICAgICAgIC8vIEZvcm1hdCBkYXRhIGludG8gSlNPTlxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgc291cmNlLmpzb24oKTtcbiAgICAgICAgLy8gUmV0dXJuIEZldGNoZWQgZGF0YVxuICAgICAgICByZXR1cm4gZGF0YS5pdGVtcztcbiAgICAgIH0sXG4gICAgICBrZXk6IFsnbG9naW4nXSxcbiAgICAgIGNhY2hlOiBmYWxzZVxuICAgIH0sXG5cbiAgICBzb3J0OiAoYSwgYikgPT4geyAgICAgICAgICAgICAgICAgICAgLy8gU29ydCByZW5kZXJlZCByZXN1bHRzIGFzY2VuZGluZ2x5IHwgKE9wdGlvbmFsKVxuICAgICAgICBpZiAoYS5tYXRjaCA8IGIubWF0Y2gpIHJldHVybiAtMTtcbiAgICAgICAgaWYgKGEubWF0Y2ggPiBiLm1hdGNoKSByZXR1cm4gMTtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfSxcbiAgICBwbGFjZUhvbGRlcjogXCJTZWFyY2ggdXNlcnNcIiwgICAgICAgICAvLyBQbGFjZSBIb2xkZXIgdGV4dCAgICAgICAgICAgICAgICAgfCAoT3B0aW9uYWwpXG4gICAgc2VsZWN0b3I6IFwiI2F1dG9Db21wbGV0ZVwiLCAgICAgICAgICAgLy8gSW5wdXQgZmllbGQgc2VsZWN0b3IgICAgICAgICAgICAgIHwgKE9wdGlvbmFsKVxuICAgIHRocmVzaG9sZDogMywgICAgICAgICAgICAgICAgICAgICAgICAvLyBNaW4uIENoYXJzIGxlbmd0aCB0byBzdGFydCBFbmdpbmUgfCAoT3B0aW9uYWwpXG4gICAgZGVib3VuY2U6IDMwMCwgICAgICAgICAgICAgICAgICAgICAgIC8vIFBvc3QgZHVyYXRpb24gZm9yIGVuZ2luZSB0byBzdGFydCB8IChPcHRpb25hbClcbiAgICBzZWFyY2hFbmdpbmU6IFwic3RyaWN0XCIsICAgICAgICAgICAgICAvLyBTZWFyY2ggRW5naW5lIHR5cGUvbW9kZSAgICAgICAgICAgfCAoT3B0aW9uYWwpXG4gICAgcmVzdWx0c0xpc3Q6IHsgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbmRlcmVkIHJlc3VsdHMgbGlzdCBvYmplY3QgICAgICB8IChPcHRpb25hbClcbiAgICAgICAgcmVuZGVyOiB0cnVlLFxuICAgICAgICAvKiBpZiBzZXQgdG8gZmFsc2UsIGFkZCBhbiBldmVudExpc3RlbmVyIHRvIHRoZSBzZWxlY3RvciBmb3IgZXZlbnQgdHlwZVxuICAgICAgICAgICBcImF1dG9Db21wbGV0ZVwiIHRvIGhhbmRsZSB0aGUgcmVzdWx0ICovXG4gICAgICAgIGNvbnRhaW5lcjogc291cmNlID0+IHtcbiAgICAgICAgICAgIHNvdXJjZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInJlc3VsdHNcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGRlc3RpbmF0aW9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F1dG9Db21wbGV0ZVwiKSxcbiAgICAgICAgcG9zaXRpb246IFwiYWZ0ZXJlbmRcIixcbiAgICAgICAgZWxlbWVudDogXCJ1bFwiXG4gICAgfSxcbiAgICBtYXhSZXN1bHRzOiA1LCAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNYXguIG51bWJlciBvZiByZW5kZXJlZCByZXN1bHRzIHwgKE9wdGlvbmFsKVxuICAgIGhpZ2hsaWdodDogdHJ1ZSwgICAgICAgICAgICAgICAgICAgICAgIC8vIEhpZ2hsaWdodCBtYXRjaGluZyByZXN1bHRzICAgICAgfCAoT3B0aW9uYWwpXG4gICAgcmVzdWx0SXRlbTogeyAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVuZGVyZWQgcmVzdWx0IGl0ZW0gICAgICAgICAgICB8IChPcHRpb25hbClcbiAgICAgICAgY29udGVudDogKGRhdGEsIHNvdXJjZSkgPT4ge1xuICAgICAgICAgICAgc291cmNlLmlubmVySFRNTCA9ICc8YSBocmVmPVwiJyArIGRhdGEudmFsdWUuaHRtbF91cmwgKyAnXCI+JyArIGRhdGEubWF0Y2ggKyAnPC9hPic7XG4gICAgICAgIH0sXG4gICAgICAgIGVsZW1lbnQ6IFwibGlcIlxuICAgIH0sXG4gICAgbm9SZXN1bHRzOiAoKSA9PiB7ICAgICAgICAgICAgICAgICAgICAgLy8gQWN0aW9uIHNjcmlwdCBvbiBub1Jlc3VsdHMgICAgICB8IChPcHRpb25hbClcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICByZXN1bHQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJub19yZXN1bHRcIik7XG4gICAgICAgIHJlc3VsdC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIjFcIik7XG4gICAgICAgIHJlc3VsdC5pbm5lckhUTUwgPSBcIk5vIFJlc3VsdHNcIjtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZXN1bHRzXCIpLmFwcGVuZENoaWxkKHJlc3VsdCk7XG4gICAgfSxcbiAgICBvblNlbGVjdGlvbjogZmVlZGJhY2sgPT4geyAgICAgICAgICAgICAvLyBBY3Rpb24gc2NyaXB0IG9uU2VsZWN0aW9uIGV2ZW50IHwgKE9wdGlvbmFsKVxuICAgICAgICB3aW5kb3cub3BlbihmZWVkYmFjay5zZWxlY3Rpb24udmFsdWUuaHRtbF91cmwpO1xuICAgIH1cbn0pO1xuIiwiJChmdW5jdGlvbigpe1xuICAvLyBQcmV2ZW50IGRlZmF1bHQgc3VibWlzc2lvblxuICAkKCcjYXV0b0NvbXBsZXRlJykuc3VibWl0KGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xufSk7XG4iXX0=
