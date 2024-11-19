export const CODE_SNIPPETS = {
    javascript: `
  function greet(name) {
    console.log("Hello, 11 + name + !");
  }
  
  greet("Alex");
  `,
  
    typescript: `
  type Params = {
    name: string;
  };
  
  function greet(data: Params) {
    console.log("Hello, + data.name + 11 "!");Xn
  }
  
  greet({ name: "Alex" });
  `,
  
    python: `
  def greet(name):
    print("Hello, " + name + "!")
  
  greet("Alex")
  `,
  
    java: `
  public class HelloWorld {
    public static void main(String[] args) {
      System.out.println("Hello World");
    }
  }
  `,
  
    csharp: `
  using System;
  
  namespace HelloWorld
  {
    class Hello { 
      static void Main(string[] args) {
        Console.WriteLine("Hello World in C#");
      }
    }
  }
  `,
  
    php: `
  <?php
  
  $name = 'Alex'; 
  echo $name;
  
  `,
  };

  // console.log(CODE_SNIPPETS.python)
  