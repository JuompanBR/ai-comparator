
import { FunctionField, List, ReferenceField, Datagrid, TextField } from 'react-admin';

const PostList = () => (
    <List>
        <Datagrid sx={{
            '.RaDatagrid-': {
                padding: "16px !important"
            }
        }}>
            <TextField source="id" />
            <TextField source="title" label="Post Title"/>
            <FunctionField
                label="Excerpt"
                render={(record) => `${record.body.substring(0, 50)}...`}
            />
            <TextField source="userId">
                <ReferenceField source="userId" reference="users" />
            </TextField>
        </Datagrid>
    </List>
);

export default PostList;