package src.targets







data class MutationCreateBankArgs(
    val code: String,
    val name: String,
    val countryCode: String
) {
  constructor(args: Map<String, Any>) : this(
      args["code"] as String,
      args["name"] as String,
      args["countryCode"] as String
  )
}
data class MutationUpdateBankArgs(
    val id: Any,
    val code: String,
    val name: String,
    val countryCode: String
) {
  constructor(args: Map<String, Any>) : this(
      args["id"] as Any,
      args["code"] as String,
      args["name"] as String,
      args["countryCode"] as String
  )
}
data class MutationDeleteBankArgs(
    val id: Any
) {
  constructor(args: Map<String, Any>) : this(
      args["id"] as Any
  )
}
data class MutationRegisterArgs(
    val firstName: String,
    val lastName: String,
    val email: String,
    val phone: String,
    val countryCode: String,
    val password: String
) {
  constructor(args: Map<String, Any>) : this(
      args["firstName"] as String,
      args["lastName"] as String,
      args["email"] as String,
      args["phone"] as String,
      args["countryCode"] as String,
      args["password"] as String
  )
}
data class MutationLoginArgs(
    val email: String,
    val password: String
) {
  constructor(args: Map<String, Any>) : this(
      args["email"] as String,
      args["password"] as String
  )
}
data class MutationAddBankAccountArgs(
    val accountNumber: String,
    val accountName: String,
    val bankId: String
) {
  constructor(args: Map<String, Any>) : this(
      args["accountNumber"] as String,
      args["accountName"] as String,
      args["bankId"] as String
  )
}
data class MutationCreateUserArgs(
    val firstName: String,
    val lastName: String,
    val email: String,
    val phone: String,
    val countryCode: String
) {
  constructor(args: Map<String, Any>) : this(
      args["firstName"] as String,
      args["lastName"] as String,
      args["email"] as String,
      args["phone"] as String,
      args["countryCode"] as String
  )
}
data class MutationUpdateUserArgs(
    val id: Any,
    val firstName: String,
    val lastName: String,
    val email: String,
    val phone: String,
    val countryCode: String
) {
  constructor(args: Map<String, Any>) : this(
      args["id"] as Any,
      args["firstName"] as String,
      args["lastName"] as String,
      args["email"] as String,
      args["phone"] as String,
      args["countryCode"] as String
  )
}
data class MutationDeleteUserArgs(
    val id: Any
) {
  constructor(args: Map<String, Any>) : this(
      args["id"] as Any
  )
}
data class MutationCreateBankAccountArgs(
    val accountNumber: String,
    val accountName: String,
    val userId: String,
    val bankId: String
) {
  constructor(args: Map<String, Any>) : this(
      args["accountNumber"] as String,
      args["accountName"] as String,
      args["userId"] as String,
      args["bankId"] as String
  )
}
data class MutationUpdateBankAccountArgs(
    val id: Any,
    val accountNumber: String,
    val accountName: String,
    val userId: String,
    val bankId: String
) {
  constructor(args: Map<String, Any>) : this(
      args["id"] as Any,
      args["accountNumber"] as String,
      args["accountName"] as String,
      args["userId"] as String,
      args["bankId"] as String
  )
}
data class MutationDeleteBankAccountArgs(
    val id: Any
) {
  constructor(args: Map<String, Any>) : this(
      args["id"] as Any
  )
}

data class QueryBankArgs(
    val id: Any
) {
  constructor(args: Map<String, Any>) : this(
      args["id"] as Any
  )
}
data class QueryUserArgs(
    val id: Any
) {
  constructor(args: Map<String, Any>) : this(
      args["id"] as Any
  )
}
data class QueryBankAccountArgs(
    val id: Any
) {
  constructor(args: Map<String, Any>) : this(
      args["id"] as Any
  )
}

