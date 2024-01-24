import { Field, ObjectType, createUnionType } from "@nestjs/graphql";


@ObjectType()
export class MutationResult {

    @Field({ nullable: true })
    success?: boolean;

    @Field({ nullable: true })
    error?: boolean;
}


export const mutationUnionResult  = createUnionType({
    name: 'mutationUnionResult',
    types: () => [MutationResult] as const,

    resolveType(value) {
        if (value.success) {
            return true;
        }
        if (value.error) {
            return false;
        }
        return null;
    },
});