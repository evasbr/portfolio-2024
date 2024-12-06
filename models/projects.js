import mongoose, {Schema} from 'mongoose';

const projectSchema = new Schema(
    {
        title: {type: String, required: true},
        synopsis: {type: String, required: true},
        description: {type: String, required: true},
        image: [{type: String}],
        tools: [{type: String}],
        lang: [{type: String}],
        urlToProject: String,
        type: String
    },
    {
        timestamps: true
    }
)

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);

export default Project;