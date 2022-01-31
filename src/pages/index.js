import { useForm, Controller } from 'react-hook-form';
import { Container, Input, TextField } from "@material-ui/core";
import firebase from '../config/firebase'

export default function Home() {
  const {
     register,
     watch,
     handleSubmit,
     formState: { errors },
     control
     } = useForm()

  const onSubmit = (data) => {
    firebase.firestore().collection('questionnaire').add({
      content: data
    })
    // firebaseにデータ('data')を記録する
    console.log(data)
  }

  const watchIsLearning = watch("isLearning");
  const watchWasLearning = watch("wasLearning");

  // console.log(watchIsLearning)
  // console.log(watchWasLearning)

  return (
    <>
      <Container>
        <h1>プログラミング学習に関するアンケート</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name">Q1.名前を入力してください（匿名可）。</label>
            <Controller
              name="name"
              defaultValue=""
              control={control}
              render={({field: { value,onChange }}) => <Input value={value}
              onChange={onChange} />}
               />
          </div>

          <div>
            <label htmlFor="birth">Q2.生年月日を入力してください。（例：19900101）</label>
            
            <Controller
              name="birth"
              defaultValue=""
              control={control}
              rules={{ required: true, pattern: /^[0-9]{8}$/ }}
              render={({field: { value, onChange }}) => <Input value={value}
              onChange={onChange} />}
            />
       
            {
              errors.birth &&
              errors.birth.type === "required" ?
              <span>このフィールドは回答必須です。</span>: null
            }
            {
              errors.birth &&
              errors.birth.type === "pattern" ?
              <span>整数8桁で入力してください。</span>: null
            }
          </div>

          <div>
            <span>Q3.現在、プログラミング学習をしていますか？</span>
            <input id="isLearning1" {...register("isLearning", { required: true })}
              name="isLearning"
              type="radio"
              value="true"
            />
            <label htmlFor="isLearning1">はい</label>

            <input id="isLearning2" {...register("isLearning", { required: true })}
              name="isLearning"
              type="radio"
              value="false"
            />
            <label htmlFor="isLearning2">いいえ</label>

            <input id="isLearning3" {...register("isLearning", { required: true })}
              name="isLearning"
              type="radio"
              value="null"
            />
            <label htmlFor="isLearning3">わからない</label>
            {
              errors.isLearning &&
              <span>このフィールドは回答必須です。</span>
            }
          </div>

          <div>
            <span>Q4.これまでに、プログラミングを学習したことがありますか？</span>
            <input id="wasLearning1" {...register("wasLearning", { required: true })}
              name="wasLearning"
              type="radio"
              value="true"
            />
            <label htmlFor="wasLearning1">はい</label>

            <input id="wasLearning2" {...register("wasLearning", { required: true })}
              name="wasLearning"
              type="radio"
              value="false"
            />
            <label htmlFor="wasLearning2">いいえ</label>

            <input id="wasLearning3" {...register("wasLearning", { required: true })}
              name="wasLearning"
              type="radio"
              value="null"
            />
            <label htmlFor="wasLearning3">わからない</label>
            {
              errors.wasLearning &&
              <span>このフィールドは回答必須です。</span>
            }
          </div>

          { ( watchIsLearning === "true" || watchWasLearning === "true" ) &&
            
                <div>
                  <label htmlFor="learningLanguage">Q5.今まで学習したことのあるプログラミング言語をすべて教えてください。</label>
                    <Controller
                        name="learningLanguage"
                        defaultValue=""
                        control={control}
                        render={({ field: { value, onChange } }) => (
                          <TextField
                            value={value}
                            onChange={onChange}
                            fullWidth
                            margin="normal"
                            rows={3}
                            multiline
                            variant="outlined"
                          />
                        )}
                      />
                </div>
          }

        <input type="submit" value="アンケートを提出する" />
        </form>
      </Container>

    </>
  )
}
