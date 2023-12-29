import data from './out.json' assert { type: 'json' };

let content = data.map(
  (item) => `
        <tr><td colspan=3>${item.input}</td></tr>

        <tr><th colspan=3> Classes </th></tr>
        ${item.story.classes.map((cls) => `<tr><td colspan=3>${cls}</td></tr>`).join('')}

        <tr><th colspan=3>Attributes</th></tr>
        <tr>
            <td><u><center> Name </center></u></td>
            <td colspan=2><u><center> Associated Class </center></u></td>
        </tr>
        ${item.story.attributes
          .map(
            (attr) => `
            <tr>
                <td>${attr.name}</td>
                <td colspan=2>${attr.class}</td>
            </tr>
        `,
          )
          .join('')}
        
        <tr><th colspan=3>Relationships</th></tr>
        <tr>
            <td><u><center> Subject </center></u></td>
            <td><u><center> Predicate </center></u></td>
            <td><u><center> Object </center></u></td>
        </tr>
        ${item.story.relationships
          .map(
            (r) => `
            <tr>
                <td>${r.subject}</td>
                <td>${r.predicate}</td>
                <td>${r.object}</td>
            </tr>
        `,
          )
          .join('')}
    `,
);

document.getElementById('table').innerHTML = content.join('<tr><td colspan=3 class="spacer-row"></td></tr>');
