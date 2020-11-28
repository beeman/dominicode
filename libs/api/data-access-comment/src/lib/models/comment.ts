import { Profile } from '@dominicode/api/data-access-profile'
import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Comment {
  @Field({ nullable: true })
  id: string

  @Field({ nullable: true })
  created: Date

  @Field({ nullable: true })
  text: string

  @Field(() => Profile, { nullable: true })
  author: Profile
}
