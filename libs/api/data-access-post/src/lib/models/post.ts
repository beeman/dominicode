import { Profile } from '@dominicode/api/data-access-profile'
import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Post {
  @Field({ nullable: true })
  id: string

  @Field({ nullable: true })
  created: Date

  @Field({ nullable: true })
  text: string

  @Field(() => Profile)
  author: Profile

  @Field({ nullable: true })
  commentCount: number

  @Field(() => [Profile], { nullable: true })
  commentedBy: Profile[]
}
